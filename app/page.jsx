
const Home = () => {
    return (
      <section className="flex flex-row-reverse">
        <div className="w-3/12 mt-4 border border-solid border-silver h-[300px] bg-white">
          <div className="bg-white p-5 ">
            <div className="mb-2.5">
              <h2>Advertisement</h2>
            </div>
            <div className="bg-darkgray p-8 mb-2.5">
              image
            </div>
            <div className="ad-text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, quam corporis modi corrupti eos laboriosam facilis provident atque aliquam magni minus, deleniti doloribus dolores optio sed ea similique, qui perspiciatis.
              </p>
            </div>
  
          </div>
        </div>
        <div className="w-9/12 mt-4 ">
          <div className=" bg-white border border-solid border-silver p-5 mr-4 mb-5">
            <div className="mb-4">
              <h2>Wellcome To Our Site ;)</h2>
            </div>
            <div className="text-sm mb-4">
              Dec 7, 2024
            </div>
            <div className="bg-darkgray p-20 mb-4">
              image
            </div>
            <div className="text">
              <p>
                You can use the buttons in the header to see the list of speakers and their seminar schedule
              </p>
            </div>
  
          </div>
        </div>
      </section>
    )
  }
  
  export default Home