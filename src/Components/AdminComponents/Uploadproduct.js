import React from 'react'

const Uploadproduct = () => {
    return (
        <div>
            <form className='text-center py-3 mx-auto'>
                <div>
                    <select placeholder='تحديد نوع المنتج' className='w-50 fields'>
                        <option hidden>اختر التصنيف</option>
                        <option>الكترونيات</option>
                        <option>عقارات</option>
                    </select>
                </div>
                <div className='d-flex mx-auto text-center w-50 justify-content-between'>
                    <div>
                        <input type='text' placeholder='اسم المنتج' className='fields w-100 mt-4' />
                    </div>
                    <div>
                        <input type='number' placeholder='سعر المنتج' className='fields w-100 mt-4' />
                    </div>
                </div>
                <div className='d-flex w-50 mx-auto text-center justify-content-between mt-4 filed'>
                    <div>
                        <select className='fields' style={{ width: "150%" }}>
                            <option hidden>محافظات مصر</option>
                            <option>القاهره</option>
                            <option>القاهره</option>
                            <option>القاهره</option>
                            <option>القاهره</option>
                            <option>القاهره</option>
                            <option>القاهره</option>
                            <option>القاهره</option>
                            <option>القاهره</option>
                            <option>القاهره</option>
                        </select>
                    </div>
                    <div>
                        <select className='fields' style={{ width: "280%" , marginRight:"-176%" }}>
                            <option hidden>مدينه</option>
                            <option>غزه</option>
                            <option>غزه</option>
                            <option>غزه</option>
                            <option>غزه</option>
                            <option>غزه</option>
                            <option>غزه</option>
                            <option>غزه</option>
                        </select>
                    </div>
                </div>
                <div className='d-flex mx-auto text-center w-50 justify-content-between mt-4'>
                    <div>
                        <input type='text' placeholder='مدة الحجز' className='fields w-100' />
                    </div>
                    <div className='w-50'>
                        <select className='fields' style={{ width: "95%" }}>
                            <option hidden>مدة الحجز</option>
                            <option>يوم</option>
                            <option>اسبوع</option>
                            <option>شهر</option>
                            <option>سنه</option>
                        </select>
                    </div>
                </div>
                <div style={{ textAlign: "right" }} className='w-50 mx-auto'>
                    <textarea placeholder='وصف المنتج' className='fields mt-4 w-100' cols="40" id="myTextarea" rows="50"></textarea>
                </div>
                <div style={{ textAlign: "right" }} className='w-50 mx-auto'>
                    <textarea placeholder='شروط حجز المنتج' className='fields mt-4 w-100' cols="40" id="myTextarea" rows="50"></textarea>
                </div>
                <button className='btn text-light bg-primary mt-2'>اضف المنتج الان</button>
            </form>
        </div>
    )
}

export default Uploadproduct
