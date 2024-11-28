import radiusImg from '../Assests/Ellipse 5.png';
export default function RadiusComp({...prop}) {
    return <div {...prop}><img src={radiusImg} alt="" className='w-[100%] h-[80px]' /></div>
}