
const Newsletter = () => {
    return (
        <div className="my-10">
            <h2 className="text-2xl font-semibold text-center">Newsletter</h2>
            <div className="h-60 bg-[#FFE4B5] mt-10">
               <h1 className="text-4xl font-semibold text-center pt-8">Send Newsletter</h1>
               <p className="pt-4 text-center text-xl">For getting up-to-date data, sign-up tho the newsletter</p>
               <div className="flex flex-row justify-center gap-2 pt-4">
                <div><input className="py-2 px-5 rounded-lg" type="email" name="" placeholder="Enter your email" id="" /></div>
                <div><button className="bg-[#E9967A] py-2 px-5 rounded-lg">subscribe</button></div>
               </div>
            </div>
        </div>
    );
};

export default Newsletter;