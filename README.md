# component-cli

automagically create react components, both jsx and tsx, from the command line. 

### let's get moving
let's put the tool on your path
`npm install component-cli -g`

navigate to the directory the component belongs
`cd /parent-directory`

run 
`component MyNewComponent`

This will output the following directory
```
+--parent-directory
|   +--myNewComponent.js
|   +--my-new-component.scss
```

### additional trickery
pass `-t` to create a `typescript component`
pass `-jsx` to create a `.jsx extension`
pass `-h` to add a hash to the `scss` class name:
`my-new-component-9ab2efa0c75981f879ca8c4714162787`
