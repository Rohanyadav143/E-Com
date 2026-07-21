import React from 'react'
import { Link } from 'react-router-dom'

import AdminSidebar from '../../../Components/Admin/AdminSidebar'
export default function AdminMaincategoryPage() {
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-lg-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-lg-9">
                        <h5 className='bg-primary p-2 text-light text-center'>Maincategory
                            <Link to="/admin/maincategory/create">
                                <i className='bi bi-plus text-light float-end'></i>
                            </Link>
                        </h5>

                    </div>
                </div>
            </div>
        </>
    )
}
