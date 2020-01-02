ng new my-workspace --createApplication="false"
ng generate library app-state
# for mobile version
ng add @ionic/angular

# for web version
ng generate application web
ng generate module core
ng generate module shared
ng generate module views --routing

# web desktop/mobile
ng generate module views/desktop --routing
ng generate module views/mobile --routing
