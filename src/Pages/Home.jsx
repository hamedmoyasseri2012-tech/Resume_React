import Header from "../assets/Component/Header";

const Home = ({ step, setStep }) => {
  handlePrev = () => {
    if (step === "Home") {
      setStep("TemplatePage");
    }
  };
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex justify-around   items-center pt-12 gap-20">
        <div className="flex flex-col  gap-10 w-160 h-125.5 pt-10 ">
          <h1 className="text-6xl  text-center font-medium">
            Your resume in three<span className="text-[#3cafab]"> easy </span>
            steps
          </h1>
          <p className="text-center text-[#989ba7]">
            Resume builder tools that assemble well-formatted resume. Through a
            resume builder, you can create a professional-looking resume in a
            few easy steps. This resume builder offer different template
            options, so you can select the template that best fits your needs
            and style.
          </p>
          <div className="flex flex-col gap-4 text-xl">
            <div className="flex gap-4 items-center">
              <button className="bg-[#edf2f6] border border-[#edf2f6] rounded-xl w-10 h-10">
                1
              </button>
              <p>Select a template from our collection.</p>
            </div>
            <div className="flex gap-4 items-center">
              <button className="bg-[#edf2f6] border border-[#edf2f6] rounded-xl w-10 h-10">
                2
              </button>
              <p>Build you resume using our easy to use resume builder.</p>
            </div>
            <div className="flex gap-4 items-center">
              <button className="bg-[#edf2f6] border border-[#edf2f6] rounded-xl w-10 h-10">
                3
              </button>
              <p>Download your resume.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <img className="flex" src="./public/home.png" alt="" />
          <button
            onClick={handlePrev}
            className="w-full border rounded-xl bg-[#37b2ad] p-2 text-white"
          >
            Select Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
