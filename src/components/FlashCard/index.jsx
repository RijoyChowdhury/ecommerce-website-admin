import React from 'react'
import BoxAltDuotone from '../../assets/icons/boxAlt'
import GraphUp from '../../assets/icons/graphUp'
import VerticalBars from '../../assets/icons/verticalBars'
import VerticalBarsAlt from '../../assets/icons/verticalBarsAlt'
import VerticalBarsAlt2 from '../../assets/icons/verticalBarsAlt2'
import ChartPieSliceDuotone from '../../assets/icons/chartPieSlice'
import PlanDuotone from '../../assets/icons/plan'

const FlashCard = ({opt, text}) => {
  return (
    <div className='box w-fit p-5 flex items-center cursor-pointer gap-4 rounded-md border border-[rgba(0,0,0,0.1)] hover:bg-[#f1f1f1] dark:bg-gray-800 dark:text-white'>
        {opt === 1 && <BoxAltDuotone fontSize={'80px'} />}
        {opt === 2 && <ChartPieSliceDuotone fontSize={'80px'} />}
        {opt === 3 && <PlanDuotone fontSize={'80px'} />}
        <div className='info w-[70%]'>
            <h3 className='text-[15px] text-[rgba(0,0,0,0.5)] dark:text-[rgba(231,231,231,0.5)]'>{text}</h3>
            <b className='text-[20px]'>1,390</b>
        </div>
        {opt === 1 && <VerticalBars width={'100px'} height={'50px'} fill={'#3872fa'} />}
        {opt === 2 && <VerticalBarsAlt width={'100px'} height={'50px'} fill={'#10b981'} />}
        {opt === 3 && <VerticalBarsAlt2 width={'100px'} height={'50px'} fill={'#7928ca'} />}
    </div>
  )
}

export default FlashCard