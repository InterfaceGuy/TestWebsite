import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
        <p className="text-lg mb-12">Get inspired by the stories shared by young people who have carried out activities with us</p>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Placeholder Testimonial Card 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-6 border border-gray-700 rounded-lg text-left">
            <p className="italic mb-4">"I am very very thankful for this experience with you guys, it was amazing to experience new things and to socialize with you, I felt so lucky to have met such amazing people like you. When I stepped foot on that bus, I knew that this is going to be amazing to get to know you. I absolutely loved to go on hikes and talk while hiking, I loved to play football with Greeks and the Portuguese also including Germans 😊. I loved to see and host the cultural nights, I wasn't able to talk to ALL of you, but with the ones I talked it was amazing."</p>
            <div className="flex items-center mt-4">
              {/* Placeholder for image */}
              <div className="w-12 h-12 rounded-full bg-gray-600 mr-4"></div>
              <div>
                <p className="font-semibold">Marcus Torres</p>
                <p className="text-sm text-gray-400">Adam, Youth Exchange 2024</p>
              </div>
            </div>
          </div>
           {/* Placeholder Testimonial Card 2 */}
           <div className="w-full sm:w-1/2 lg:w-1/3 p-6 border border-gray-700 rounded-lg text-left">
            <p className="italic mb-4">"I loved every bit of this week. And especially all of you. I hope everyone had as much the same amount of fun or even more than I had. I will miss you guys like hell and I will see every one of you again"</p>
            <div className="flex items-center mt-4">
              {/* Placeholder for image */}
              <div className="w-12 h-12 rounded-full bg-gray-600 mr-4"></div>
              <div>
                <p className="font-semibold">Kristine L</p>
                <p className="text-sm text-gray-400">Long-term CES Volunteer 2024</p>
              </div>
            </div>
          </div>
           {/* Placeholder Testimonial Card 3 */}
           <div className="w-full sm:w-1/2 lg:w-1/3 p-6 border border-gray-700 rounded-lg text-left">
            <p className="italic mb-4">"I want to say BIG THANK YOU for what you are doing for us! I realize how much we receive from your side and how lucky we are to have you. Being part of this project is a blessing, I feel so safe and satisfied, it's like mother's womb, I am so grateful!"</p>
            <div className="flex items-center mt-4">
              {/* Placeholder for image */}
              <div className="w-12 h-12 rounded-full bg-gray-600 mr-4"></div>
              <div>
                <p className="font-semibold">Bob Larrat</p>
                <p className="text-sm text-gray-400">Lovisa, Youth Exchange 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
