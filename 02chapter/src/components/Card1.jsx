import React from 'react'

const Card1 = (props) => {
    console.log(props);
    return (
        <>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2022/09/25/23/28/android-7479380_1280.png" alt="" width="384" height="512" />
                <div className="pt-6 space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium font-light text-white	" >
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It is easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            Sarah Dayan
                        </div>
                        <div className='text-white'>
                            Staff Engineer, Algolia
                        </div>
                    </figcaption>
                </div>
            </figure>
        </ >
  )
}

export default Card1