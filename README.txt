The answers to your question are subjective, however there are some recommendations from official docs you can follow: What kinds of modules should I have and how should I use them?. If you haven't read docs on NgModule and FAQ, I'd suggest spending a few hours studying them, things will be much clearer (at least they were for me :)

I'm using the following setup and it works quite well for me:

app/shared - This is the module where I keep small stuff that every other module will need. I have 3 submodules there directives, components and pipes, just to keep things organized a little better. Examples: filesize.pipe, click-outside.directive, offline-status.component...
app/public - In this module I keep public routes and top-level components. Examples: about.component, contact.component, app-toolbar.component
app/core - Services that app needs (and cannot work without) go here. Examples: ui.service, auth.service, auth.guard, data.service, workers.service....
app/protected - Similar to public, only for authorized users. This module has protected routes and top-level components. Examples: user-profile.component, dashboard.component, dashboard-sidebar.component...
app/features - This is the module where app functionalities are. They are organized in several submodules. If you app plays music, this is where player, playlist, favorites submodules would go. If you look at the @angular/material2 this would be an equivalent to their MaterialModule and many submodules, like MdIconModule, MdSidenavModule etc.
app/dev - I use this module when developing, don't ship it in production.
General advice would be:




organize features by functionality, not by pages
keep similar routes in their own module (good for lazy loading)
services that app needs to function go to core
things you import more than once (or twice) are probably good for shared
read docs in detail, lots of good stuff there
To answer your specific questions: I would put all those routes in one module - static, public, whatever the name. CsrfService - core, Logger - core or dev, HttpModule - core, you only need one instance (probably), auth - core. Don't put services in shared.

If you can't decide how/what to group in a feature, make a new app, copy specific feature folder and it should work there as well. If it doesn't, you'll need to organize things better.





|-- app
     |-- public
       |-- home
       |-- contact
       |-- about
       |-- navbar
     |-- core
       |-- [+] authentication
       |-- [+] footer
       |-- [+] guards
       |-- [+] http
       |-- [+] interceptors
       |-- [+] mocks
       |-- [+] services
       |-- [+] header
       |-- core.module.ts
       |-- ensureModuleLoadedOnceGuard.ts
       |-- logger.service.ts
     |
     |-- shared
          |-- [+] components
          |-- [+] directives
          |-- [+] pipes
          |-- [+] models
     |
     |-- [+] configs
|-- assets
     |-- images
     |-- data  
        |-- test.json