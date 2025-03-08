import Typewriter from 'typewriter-effect';
const Banner = () => {
     return (
          <div>
               <div className="relative hero bg-[url('/images/banner.jpg')] rounded-xl h-[650px] bg-fixed bg-center bg-cover">
                    <div className="absolute inset-0 bg-gradient-to-b from-red-700/65 to-red-700/60 rounded-xl"></div>
                    <div className="relative hero-content text-center">
                         <div style={{ textShadow: '1px 1px 15px rgba(255,255,255,0.7' }} className="space-y-5">
                              <h1 className="text-4xl md:text-6xl text-white font-extrabold" >
                              <Typewriter
                                   options={{
                                        strings: ['Feast & Flavor Indulge in Culinary Adventures'],
                                        autoStart: true,
                                        loop: true,
                                   }}
                              />
                              </h1>

                              <p className="py-6 text-base md:text-xl font-bold text-white">
                                   Deliciously Diverse Culinary Adventures: A Foodies Ultimate Guide to Tasty Recipes, Restaurant Reviews, Cooking Tips, and Global Flavors for Every Palate – Exploring Gourmet Delights, Street Food Wonders, Healthy Eats, and Sweet Treats for the Passionate Food Enthusiast!
                              </p>
                              <div className="flex items-center justify-center gap-3">
                                   <button className="btn bg-white font-extrabold hover:bg-[#ff6b6b00] duration-300 hover:scale-110 hover:text-white text-black">Explore Now</button>
                                   <button className="btn bg-white font-extrabold hover:bg-[#ff6b6b00] duration-300 hover:scale-110 hover:text-white text-black">Our Feedback</button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};




export default Banner;