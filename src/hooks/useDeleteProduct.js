import { useState } from "react";
import Swal from "sweetalert2";

const useDeleteProduct = () => {
    const [items, setItems] = useState([])
    const deleteProduct = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server.herokuapp.com/product/${id}`, {
                    method: 'DELETE'
                }).then(res => res.json()).then(data => {
                    const rest = items.filter(pd => pd._id !== id);
                    setItems(rest)
                })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
     
    }
      
    return [items, setItems, deleteProduct]
}
export default useDeleteProduct