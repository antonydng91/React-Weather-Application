



export  const Utilities ={
    deepCopy:function(obj){
        return (JSON.parse(JSON.stringify(obj))) //date obkect and function not allowed
    }
}

export const Constants = {
    cities:["OTTAWA","MOSCOW","TOKYO"],
    weekday : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    numberOfForcast:4, //number of future forcast required
    weatherDataInterval:1 //in minutes
  };
  
  export const imageUrls=[
   {391522:'https://images.pexels.com/photos/391522/pexels-photo-391522.jpeg?auto=compress&cs=tinysrgb&w=600' },
   {1118873:'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600' },
   {209831:'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=600' },
   {325185:'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600' },
   {395196:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=600' },
   {844297:'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=600' },
   {912364:'https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&w=600' },
   {1028600:'https://images.pexels.com/photos/1028600/pexels-photo-1028600.jpeg?auto=compress&cs=tinysrgb&w=600' },
   {125510:'https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=600' },
   {1162251:'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=600' },
   {76969:'https://images.pexels.com/photos/76969/pexels-photo-76969.jpeg?auto=compress&cs=tinysrgb&w=600' },
   {459451:'https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&w=600' },
   {1446076:'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=600' },
   {108941:'https://images.pexels.com/photos/108941/pexels-photo-108941.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ]
