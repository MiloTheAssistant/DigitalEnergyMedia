# Microsoft 365 Mail Scope Runbook

Digital Energy Media uses Microsoft Graph `Mail.Send` application permission so the Vercel contact form can send lead notifications from `Contact@DigitalEnergyMedia.Com`.

By default, Microsoft Graph application `Mail.Send` is tenant-wide. Scope the app to the contact mailbox before broad traffic.

## Current Values

- App display name: `Digital Energy Media Website`
- Application client ID: `aa118c63-69b1-413d-9e84-53d797cd95ac`
- Sender mailbox: `Contact@DigitalEnergyMedia.Com`
- Vercel env sender: `MS_FROM_EMAIL=Contact@DigitalEnergyMedia.Com`

## Preferred Path: Exchange Application RBAC

Microsoft now recommends Exchange Online RBAC for Applications for new scoped access.

Prerequisites:

- Microsoft Entra role: Exchange Administrator.
- Exchange Online role group: Organization Management, or equivalent delegated Exchange permissions.
- ExchangeOnlineManagement PowerShell module.
- The Enterprise Application service principal object ID for `Digital Energy Media Website`. Do not use the App Registration object ID for this value.

Install and connect:

```powershell
Install-Module ExchangeOnlineManagement -Scope CurrentUser
Import-Module ExchangeOnlineManagement
Connect-ExchangeOnline
```

Find the Enterprise Application service principal object ID:

1. Open Microsoft Entra admin center.
2. Go to Enterprise applications.
3. Open `Digital Energy Media Website`.
4. Copy the Object ID from that Enterprise Application page.

Configure scoped access:

```powershell
$AppId = "aa118c63-69b1-413d-9e84-53d797cd95ac"
$ServicePrincipalObjectId = "<enterprise-application-object-id>"
$Mailbox = "Contact@DigitalEnergyMedia.Com"
$ScopeName = "DEM Contact Mailbox"
$AssignmentName = "DEM Website Mail.Send Contact Only"

New-ServicePrincipal `
  -AppId $AppId `
  -ObjectId $ServicePrincipalObjectId `
  -DisplayName "Digital Energy Media Website"

New-ManagementScope `
  -Name $ScopeName `
  -RecipientRestrictionFilter "PrimarySmtpAddress -eq '$Mailbox'"

New-ManagementRoleAssignment `
  -Name $AssignmentName `
  -Role "Application Mail.Send" `
  -App $AppId `
  -CustomResourceScope $ScopeName

Test-ServicePrincipalAuthorization `
  -Identity $AppId `
  -Resource $Mailbox |
  Format-Table RoleName,GrantedPermissions,AllowedResourceScope,ScopeType,InScope
```

Expected test result:

- `RoleName`: `Application Mail.Send`
- `GrantedPermissions`: `Mail.Send`
- `InScope`: `True`

After the policy is applied, submit the live website form once and confirm it still reaches `/thank-you`.

## Fallback Path: Legacy Application Access Policy

Microsoft marks Application Access Policies as legacy. Use this only if Application RBAC is unavailable in the tenant.

This approach requires a mail-enabled security group containing `Contact@DigitalEnergyMedia.Com`.

```powershell
$AppId = "aa118c63-69b1-413d-9e84-53d797cd95ac"
$PolicyScopeGroup = "<mail-enabled-security-group-address>"

New-ApplicationAccessPolicy `
  -AppId $AppId `
  -PolicyScopeGroupId $PolicyScopeGroup `
  -AccessRight RestrictAccess `
  -Description "Restrict Digital Energy Media Website Mail.Send to the contact mailbox group."

Test-ApplicationAccessPolicy `
  -Identity "Contact@DigitalEnergyMedia.Com" `
  -AppId $AppId
```

Application Access Policy changes can take more than one hour to affect Microsoft Graph calls even after the test cmdlet returns the expected result.

## Verification

After either scoping method:

1. Submit the live contact form at `https://digitalenergymedia.com`.
2. Confirm redirect to `https://digitalenergymedia.com/thank-you`.
3. Confirm the email arrives at `Contact@DigitalEnergyMedia.Com`.
4. Check Vercel production logs for new mail errors.

## References

- Microsoft Learn: Role Based Access Control for Applications in Exchange Online.
- Microsoft Learn: Application Access Policies.
