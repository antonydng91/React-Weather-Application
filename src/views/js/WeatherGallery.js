import {useEffect,useState,useRef} from 'react';
import {imageUrls} from '../../assets/js/WeatherConstants';


export default function  WeatherGallery(){

    const [imageCount,setImageCount]=useState(3);
    const [loadUrls,setLoadedUrls]=useState([]);
    const interSecRef=useRef();
    
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      };

      const loadThedata=()=>{
        setImageCount((prev)=>{
           return prev+3;
        })
      }
      
      const callback=(observer)=>{
       if(observer[0].isIntersecting){
            loadThedata() 
        }
    }

    useEffect(()=>{
        let observer = new IntersectionObserver(callback, options);
        observer.observe(interSecRef.current);
        setLoadedUrls(imageUrls.slice(0,imageCount+1));
        return ()=>{
            if(interSecRef.current){
                observer.unobserve(interSecRef.current); 
            }
        }
    },[imageCount])



    return (<>
         <h1>Image is Lazy Loaded here</h1>
          <div className="grid-container">
            {loadUrls && loadUrls.map((obj)=>{
                let key=Object.keys(obj)[0];

              return <img key={key} loading="lazy" alt="" src={obj[key]}></img>
            })}
            <div ref={interSecRef}></div>
           </div></>
    )

}