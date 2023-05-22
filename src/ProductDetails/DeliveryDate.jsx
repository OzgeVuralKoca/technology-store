import { MdLocalShipping } from "react-icons/md"

const DeliveryDate = () => {
    const today = new Date();
    let month = today.getMonth();
    const day = today.getDate();

    let nowMonth = ''

    if (month === 1) {
        nowMonth = 'Ocak'
    } else if (month === 2) {
        nowMonth = 'Şubat'
    } else if (month === 3) {
        nowMonth = 'Mart'
    } else if (month === 4) {
        nowMonth = 'Nisan'
    } else if (month === 5) {
        nowMonth = 'Mayıs'
    } else if (month === 6) {
        nowMonth = 'Haziran'
    } else if (month === 7) {
        nowMonth = 'Temmuz'
    } else if (month === 8) {
        nowMonth = 'Ağustos'
    } else if (month === 9) {
        nowMonth = 'Eylül'
    } else if (month === 10) {
        nowMonth = 'Ekim'
    } else if (month === 11) {
        nowMonth = 'Kasım'
    } else if (month === 12) {
        nowMonth = 'Aralık'
    }
    
    return (
        <h6><MdLocalShipping size={25} className='me-1' /> Tahmini Teslimat: {day + 3} - {day + 5} {nowMonth}</h6>
    )
}

export default DeliveryDate