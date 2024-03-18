
import './Slider.css'

import React, { useState } from 'react';

import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Carousel from 'react-elastic-carousel'

let coursesData = [
  {

  
    english: "روز اول هفته شما باید عضلات جلو بازو و پشت بازو را تمرین دهید. سعی کنید تمرین ها را دقیق انجام دهید و حرکات را آرام انجام دهید ",
    city: ' جلو بازو و پشت بازو  ',
    farsi: 'شنبه',
    src: 'images/h.jpg'
  },

  {
    english: "روز دوم شما باید عضله سینه را تمرین دهید این عضله شامل سه بخش بالا، میانی و پایین است",
  city: ' سینه را تمرین دهید',
    farsi: 'یک شنبه',

   
    src: 'images/h.avif'
  },




  {

    english: 'در روز بعدی عضله پا و سر شانه را تمرین می دهیم. عضله پا شامل جلو پا، پشت پا و ساق می باشد که در این برنامه کار می کنیم',
    city: ' پا و سر شانه کار کنید',
    farsi: 'دوشنبه',
 

    src: 'images/b.png'
  },
  {

 


    english: "در روز پنجم برنامه هفتگی بدنسازی عضلات زیبا پشت را تمرین می دهیم این عضله شامل چند قسمت است که آن ها را درگیر می کنیم", price: "Speaking",
    city: 'عضلات زیر بغل را تمرین دهید',
    farsi: ' سه شنبه',

    src: 'images/t.jpg'
  },
  {

    english: 'اگر دنبال شکم شش تکه هستید حتما این روز از تمرین را از دست ندهید. ما در این برنامه عضله شکم را درگیر می کنیم. تغذیه خوبی داشته باشید نتیجه می گیرید',
    city: ' شکم بزنید',
    farsi: ' چهار شنبه',

    src: 'images/hh.jpg'



  },
  {

    english: ' استراحت کنید و  به تغذیه خود برسید این نکته را فراموش نکنید که استراحت کردن رکن اساسی همه ورزش هاست',
    city: ' راحت باش  ',
    farsi: ' پنج شنبه',

    src: 'images/r.jpeg'


  },
  {

    english: ' استراحت کنید و  به تغذیه خود برسید این نکته را فراموش نکنید که استراحت کردن رکن اساسی همه ورزش هاست',
    city: ' راحت باش  ',
    farsi: ' جمعه',

    src: 'images/r.jpg'


  },


]



function Slider() {

  const [show, setShow] = useState(0);

  const [score, setScore] = useState(0);
  const [second, setSecond] = useState(0);
  const { pathname } = useLocation();



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  function decresereState() {
    setShow(show + 1)
    if (
      show > 4
    ) {
      setShow(0)
    }

  }

  function reduceState() {
    setShow(show - 1)

    if (
      show < 0
    ) {
      setShow(0)
    }
  }

  function addsecond() {
    setSecond(second + 1)
  }



  return (

    <body className='con'>


      <Carousel onPrevEnd={(currentItem, pageIndex) =>

        reduceState()

      }

      

        onNextEnd={(currentItem, pageIndex) =>
          decresereState()
        }


     




        className='carusal' itemsToScroll={1} itemsToShow={3}  rtl={true}  >

        <div className='parent-image-slider' >


          <h1 className='hhh v'>
            {coursesData[0].english}
            <h className='score' >
              {coursesData[0].farsi}
            </h>


            <h className='score city' >
              {coursesData[0].city}
            </h>

            <img className='image-slider' src={coursesData[0].src}

            >
            </img >
          </h1>




        </div>

       

        <div className='parent-image-slider' >


          <h1 className='hhh v'>
            {coursesData[1].english}
            <h className='score' >
              {coursesData[1].farsi}
            </h>


            <h className='score city' >
              {coursesData[1].city}
            </h>

            <img className='image-slider' src={coursesData[1].src}

            >
            </img >
          </h1>




        </div>



        <div className='parent-image-slider' >
          <h1 className='hhh v'>
            {coursesData[2].english}
            <h className='score ' >
              {coursesData[2].farsi}
            </h>


            <h className='score city' >
              {coursesData[2].city}
            </h>

            <img className='image-slider' src={coursesData[2].src}



            >
            </img >
          </h1>





        </div>

        <div className='parent-image-slider' >


          <h1 className='hhh v'>
            {coursesData[3].english}
            <h className='score' >
              {coursesData[3].farsi}
            </h>


            <h className='score city' >
              {coursesData[3].city}
            </h>
            <img className='image-slider' src={coursesData[3].src}

            >
            </img >
          </h1>



        </div>

        <div className='parent-image-slider' >



<h1 className='hhh v'>
  {coursesData[4].english}
  <h className='score' >
    {coursesData[4].farsi}
  </h>


  <h className='score city' >
    {coursesData[4].city}
  </h>
  <img className='image-slider' src={coursesData[4].src}



  >
  </img >

</h1>



</div>


        <div className='parent-image-slider' >


          <h1 className='hhh v'>
            {coursesData[5].english}
            <h className='score' >
              {coursesData[5].farsi}
            </h>

            <h className='score city' >
              {coursesData[5].city}
            </h>

            <img className='image-slider' src={coursesData[5].src}

            >
            </img >

          </h1>




        </div>


        <div className='parent-image-slider' >



          <h1 className='hhh v'>
            {coursesData[6].english}
            <h className='score' >
              {coursesData[6].farsi}
            </h>


            <h className='score city' >
              {coursesData[6].city}
            </h>
            <img className='image-slider' src={coursesData[6].src}



            >
            </img >

          </h1>



        </div>


  







      </Carousel>

    </body>

  );
}


export default Slider;