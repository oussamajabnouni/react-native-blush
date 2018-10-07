# Blush 🛠

Blush is a small function with a set of helpers to make creating styles in react native more productive and easy

# ✅ Working Features!

  - Get access to device width and height and a normalize function
  - Set styles for every platform
  ```sh
const style = Blush(({deviceWidth,deviceHeight,normalize})=>({
      container: {
        margin: deviceWidth,
        ios: {
          padding: deviceHeight
        },
        android: {
            fontSize: normalize(16)
        }
      }
}))
```
  - You can use Blush without passing a function if you don't need the helpers
  ```sh
const style = Blush({
      container: {
        margin: 10,
        ios: {
          padding: 10
        },
        android: {
            fontSize: 16
        },
        rtl:{
            backgroundColor: "#fff"
        }
      }
})
```


### Installation

This module is distributed via npm and should be installed as one of your project's dependencies:
```sh
$ yarn add react-native-blush
```
From here you can now import this module:
```sh
$ import Blush from 'react-native-blush'
```



### Contributing

This project is in early stage development. Your contributions are welcome! take a look at the todos.


### Todos

- [ ] enhanced margin and padding
- [ ] spread styles functionality
- [x] just hodor more features are coming

License
----

MIT

