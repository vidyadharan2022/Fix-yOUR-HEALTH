import React from 'react'
import Header from './Header';
import Nutritipsimg from './Nutritipimg.jpg'
import './Nutritips.css';

export default function Nutritips() {
  return (
    <>
      <Header/>
      <div className='nutricontents'>
        <h1 className='NutritipsName'>Nutritips</h1><hr className='Nutriline'></hr>
        <img src={Nutritipsimg} className='Nutriimg'></img>
        <div className='Nutrifirstcontent'>
          <h2 className='ImportQuestion1'>Importance Of Nutrition In Our Daily Life</h2>
          <p className='ImportQanswer'>Nutrition is an essential component of our daily life. It plays a vital role in our overall health and well-being. Good nutrition is the cornerstone of good health. In this article, we will discuss the importance of nutrition in our daily life.  We will also touch on how it affects our health, and what we can do to improve our nutritional habits.</p>
        </div>
        <div className='Nutrisecondcontent'>
          <h2 className='ImportQuestion2'>What Is Nutrition?</h2>
          <p className='ImportQanswer'>Nutrition is the study of how food affects the body. It includes the processes by which the body uses food to meet its energy needs, repair and maintain its tissues, and support growth and development. Good nutrition involves consuming a balanced diet that provides all the essential nutrients that our bodies need to function properly.</p>
        </div>
        <div className='Nutrithirdcontent'>
          <h2 className='ImportQuestion3'>Why Is Nutrition Important?</h2>
          <p className='ImportQanswer3'>Nutrition is important for several reasons. Firstly, it provides the body with the energy it needs to carry out its daily functions. Secondly, it helps to build and repair tissues in the body. Thirdly, it supports growth and development, especially in children. Fourthly, it plays a crucial role in maintaining a healthy immune system.  A good immune system helps to prevent and fight off infections and diseases. Lastly, good nutrition can help to prevent chronic diseases, such as diabetes, heart disease, and some cancers.</p>
        </div>
        <div className='Noimgcontent'>
          <div className='Nutriforthcontent'>
            <h2 className='ImportantQuestion'>The Benefits And Importance Of Good Nutrition</h2>
            <p className='Benefitscotent'>Good nutrition has numerous benefits for our overall health and well-being. Here are some of the key benefits</p>
            <ul className='Listcontent'>
              <li>Increased Energy Levels</li>
              <li>Improved Digestion</li>
              <li>Better Mental Health</li>
              <li>Improved Heart Health</li>
              <li>Better Immune Function</li>
              <li>Reduced Risk Of Chronic Diseases</li>
            </ul>
          </div>
          </div>
            <p className='fillinpara'>Good nutrition is not only beneficial, it’s necessary for wellness. From obesity to Type 2 diabetes, an unhealthy diet can wreak havoc on your health. Most Americans eat a diet that falls short of nutrition recommendations. For starters, only 10% of people eat the recommended daily servings of fruits and vegetables, and most fail to get enough whole grains and fiber.At the same time, many consume too much salt, added sugar, and fat, which has a major impact on health and disease development. In fact, an unhealthy diet contributes to over 675,000 premature deaths each year.</p>
        </div>
    </>
  )
}