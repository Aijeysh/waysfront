import React, { useEffect, useState } from 'react'

const Services = () => {
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    setLoaded(false);
  },[]);
  
  return (
    <div className={" mx-auto left-0 right-0 text-slate-200  -z-10"} >
      <h1 className="max-w-max min-w-min mx-auto font-medium
         sm:text-2xl text-xl  p-4 mb-6">Services Ways Private Limited Nepal Provides:</h1>
      <div className="grid self-center sm:grid-cols-2  gap-4 md:grid-cols-3">
        <div className={loaded ? "gridChild1Hidden" : "gridChild1Show  gridChilds   bg-[#97aac269]   gridChilds1"}>
          <h1 className="font-semibold mx-auto mb-2"><span className=" underline" >Dramas </span> :</h1>
          <p><strong>Ways Private</strong> organizes dramas in theatre as welll as at open stage i.e. Stage Drama, Community Drama and Street Drama.
            We organize dramas for schools and colleges too.</p>
        </div>
        <div className={loaded ? "gridChild1Hidden" : "gridChild1Show gridChilds gridChilds2"}>
          <h1 className="font-semibold mx-auto mb-2"><span className=" underline">Workshops </span> :</h1>
          <p><strong>Ways Private</strong> organizes and facilitate workshops for movie making, theatre performances and actor's preparation.</p>
        </div>
        <div className={loaded ? "gridChild1Hidden" : "gridChild1Show gridChilds gridChilds3"}>
          <h1 className="font-semibold mx-auto mb-2"><span className=" underline">Movies</span> :</h1>
          <p><strong>Ways Private</strong> helps/works together with company/theatre/ organization in production of movies, short movies and feature film.</p>
        </div>
        <div className={loaded ? "gridChild1Hidden" : "gridChild1Show gridChilds gridChilds1"}>
          <h1 className="font-semibold mx-auto mb-2"><span className=" underline">Experts</span> :</h1>
          <p><strong>Ways Private</strong> provides experts service for teaching acting, music and dance as well as facilitator and co-ordinator for various kind of workshops related to art and culture.</p>
        </div>
        <div className={loaded ? "gridChild1Hidden" : "gridChild1Show  gridChilds gridChilds2"}>
          <h1 className="font-semibold mx-auto mb-2 "><span className=" underline">Project Management </span> :</h1>
          <p><strong>Ways Private</strong> also manages other group's or company's tasks related to performing arts.</p>
        </div>
        <div className={loaded ? "gridChild1Hidden" : "gridChild1Show gridChilds gridChilds3"}>
          <h1 className="font-semibold mx-auto mb-2"><span className=" underline">Social Awareness</span> :</h1>
          <p><strong>Ways Private</strong> works on various kind of social and human issues to create awareness through Art.</p>
        </div>
      </div>
    </div>
  )
}

export default Services