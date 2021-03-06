const style={
    option:`m-5`
}

const Content=()=>{
    return(
        <div className="flex  justify-between z-67 fixed right-0">
           <div className="flex w-13">
                <img className="w-[100px] h-[90px]" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"/>
            </div>
            <div className="flex ">
                <div className="flex flex-row">
                <input type="text" placeholder="Search your assets" class="placeholder-gray-500 rounded-full px-3 pl-8 py-1 outline-none transition duration-700 ease-in-out focus:shadow-outline w-34 h-12" />
                </div>
                <div className={style.option}>New Release</div>
                <div className={style.option}>Featured</div>
                <div className={style.option}>Cart</div>
            </div>
        </div>
    )
}
export default Content;