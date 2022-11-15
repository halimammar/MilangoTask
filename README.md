# MilangoTask App 


### Description

A Demo App using to implement a solution for discovering popular repositories on GitHub.
-  splash screen 
-  explore tab (filter by stars)
-  repositories tab (filter by language)

### Screen record



https://user-images.githubusercontent.com/108355944/201995467-a111705f-9a52-4d8a-9cf4-3bb7f799f9d1.mp4






### Screen shots

<p float='left'>
<img src="https://user-images.githubusercontent.com/108355944/201990173-1b96b196-19b6-4177-8075-31ac7bea7d14.png"  height="700">
<img src="https://user-images.githubusercontent.com/108355944/201990178-8bcc4a94-65e6-4615-a8f3-a0220eaf07c5.png"  height="700">
<img src="https://user-images.githubusercontent.com/108355944/201990188-09ef2419-02ea-4b11-9559-b050e1f87fcd.png"  height="700">
<img src="https://user-images.githubusercontent.com/108355944/201990196-93ddb2ad-01f1-4594-aff3-94a07a660919.png"  height="700">
<img src="https://user-images.githubusercontent.com/108355944/201990204-559450c3-4106-4b4e-b858-9d458860d67c.png"  height="700">
  
<p/>


### Used API 

products :https://api.github.com/search/repositories?q=created:>2019-01-10&sort=stars&order=desc
    
    
### Main technologies used

- [React Native + typescript](https://reactnative.dev/docs/typescript)
- [React Navigation](https://reactnavigation.org/)
- [React Query](https://tanstack.com/query/v4)


## Prerequisites

- React Native CLI to be installed.
- Simulator or emulator to run the app on.


### Installation

First clone the repo using `SSH` or `HTTPS`.
Here's an example using `HTTPS`:

`git clone https://github.com/halimammar/MilangoTask`

Second run the following command to install project dependencies:

`yarn install`

**in IOS**

You will need to make one more step to install pods dependencies, run the following command in the project directory:

- `cd ios && pod install`


### Run on Device

- run `yarn android` or `yarn ios` to run on device or emulator.


### Used dependencies

```json
    "@react-navigation/material-top-tabs": "^6.3.0",
    "@react-navigation/native": "^6.0.13",
    "@react-navigation/native-stack": "^6.9.1",
    "@tanstack/react-query": "^4.14.6",
    "moment": "^2.29.4",
    "react": "18.1.0",
    "react-native": "0.70.5",
    "react-native-pager-view": "^6.1.0",
    "react-native-safe-area-context": "^4.4.1",
    "react-native-screens": "^3.18.2",
    "react-native-select-dropdown": "^3.0.1",
    "react-native-tab-view": "^3.3.0",
    "react-native-vector-icons": "^9.2.0"
```


