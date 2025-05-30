---
 layout : post
 title : Displaying UML in Markdown using plantuml
 tags: [tech,config]
---

## [plantuml proxy](https://www.plantuml.com/plantuml/proxy)

## [plantuml manual](https://plantuml.com/ko/)

## Use Markdown

```md
![IA_ServiceFront.uml](https://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/minias/minias.github.io/master/public/uml/IA_ServiceFront.iuml)
```

## Example UML

![IA_ServiceFront.uml](https://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/minias/minias.github.io/master/public/uml/IA_ServiceFront.iuml)

## [IA_ServiceFront.iuml](https://raw.githubusercontent.com/minias/minias.github.io/master/public/uml/IA_ServiceFront.iuml)

```txt
@startwbs
<style>
.Public {
BackgroundColor Black
LineColor Black
FontColor white
}
.Public_NoBox {
FontColor Black
}
.Internal {
BackgroundColor SkyBlue
LineColor SkyBlue
FontColor white
}
.Internal_NoBox  {
FontColor SkyBlue
}
</style>
* Intro
**< Sign Up
***_ Email
***_ NickName
***_ Password
***_ Birth date
***_ Gender
***_ Access Code
***_ Terms And Service
***_ Privacy Policy
***_ Verify Email
**> Sign In
***_< SNS facebook SignIn [TBD]
***_< SNS google SignIn [TBD]
***_ Checked Verify Email
***_ Input Email [1st Sign In]
***_ Input Password [1st Sign In]
***_< Access Code [Not Sign Out]
*** Main
****< KYC
**** Create Wallet
*****_ force Create Wallet [1st Sign In]
*****_ Wallet Code
****< QR Scan
**** My QR Show
*****_ Copy Wallet Address <<Public_NoBox>>
*****_ Save QR Code <<Public_NoBox>>
****< Internal Wallet <<Internal>>
*****< Send <<Internal>>
******_< To Address <<Internal_NoBox>>
******_< To NickName <<Internal_NoBox>>
******_< Amount <<Internal_NoBox>>
******_< Wallet Code <<Internal_NoBox>>
******< Buy <<Internal>>
*******_< Internal Buy <<Internal_NoBox>>
*****< History <<Internal>>
******_< Period Filter <<Internal_NoBox>>
******_< Transaction Type Filter <<Internal_NoBox>>
******_< order Filter <<Internal_NoBox>>
******< Detail <<Internal>>
*******_< Share <<Internal_NoBox>>
*****_< Copy Wallet Address <<Internal_NoBox>>
*****< Swap <<Internal>>
******_< Amount <<Internal_NoBox>>
******_< Auto Calc Fee <<Internal_NoBox>>
******_< Wallet Code <<Internal_NoBox>>
******_< Share <<Internal_NoBox>>
**** Public Wallet <<Public>>
***** Send <<Public>>
******_ To Address <<Public_NoBox>>
******_ To NickName <<Public_NoBox>>
******_ Amount <<Public_NoBox>>
******_ Auto Calc Fee <<Public_NoBox>>
******_ Wallet Code <<Public_NoBox>>
****** Buy <<Public>>
*******_ Internal Buy <<Public_NoBox>>
***** History <<Public>>
******_ Period Filter <<Public_NoBox>>
******_ Transaction Type Filter <<Public_NoBox>>
******_ order Filter <<Public_NoBox>>
****** Detail <<Public>>
*******_ Share <<Public_NoBox>>
*****_ Copy Wallet Address <<Public_NoBox>>
***** Swap <<Public>>
******_ Amount <<Public_NoBox>>
******_ Auto Calc Fee <<Public_NoBox>>
******_ Wallet Code <<Public_NoBox>>
******_ Share <<Public_NoBox>>
****< Notifications
*****_< Internal Received
*****_< Public Received
*****_< Service
*****_< KYC
****< My page
*****_< informations
*****_< settings
*****_< order
*****_< Sign out
**** Service [TBD]
**** ADS [TBD]
@endwbs
```
