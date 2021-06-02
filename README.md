## Features
1.Pure js solution.
2.Android and iOS both support.
3.Lots of options for button

## Settings
Name          |  Default                        |      Type           |  Description
--------------|---------------------------------|---------------------|-------------------
textStyle     |  null                           |   Object            |  The textStyle  of the Button
style         |  null                           |   Object            |  The style of the Button
onPress       |  {}                             |   Function          |  Touch event of the Button
disabled      |  false                          |   Bool              |  Forbidden touch event
text          |  ""                             |   String            |  The text of the Button
activeOpacity |  0.7                            |   Number            |  The opacity of the Button when was pressed
isLoading     |  false                          |   Bool              |  The loading animation of the Button when was pressed


## Usage
```
import {React} from 'react';
import Button from 'react-native-button';

export default class Example extends React.Componment{
      render(){
      	return(
           <View>
             <Button text={"按钮"} styel={width:80,height:40,backgroundColor:'#'}/>
           </View>
      	)
      }
}