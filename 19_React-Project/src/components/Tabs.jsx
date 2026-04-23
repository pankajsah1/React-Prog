import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../Redux/Features/searchSlice'

const Tabs = () => {
    const tab = ['photos', 'videos', 'gif']
    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>state.search.activeTab)
  return (
    <div className='flex gap-5 p-10'>
        {tab.map(function(elem,idx) {
            return (<button 
            className={`${(activeTab==elem ? 'bg-blue-700':'bg-gray-600')} transition cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
            key = {idx}
            onClick={()=>{
                dispatch(setActiveTab(elem))
            }}
            >{elem}
            </button>
            )
        })}
    </div>
  )
}

export default Tabs