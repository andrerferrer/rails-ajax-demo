import Rails from '@rails/ujs'

const deleteRestaurant = () => {
  const deleteBtns = document.querySelectorAll("[id^=restaurant-]")

  const ajaxCall = (event) => {
    const currentBtn = event.currentTarget
    const id = currentBtn.id.slice(-1)
    Rails.ajax({
      url: `/restaurants/${id}`,
      type: "delete",
      // data: "",
      success: function(data) { 
        // remove button
        currentBtn.parentElement.remove() 
      },
      error: function(data) {alert('something went wrong!')}
    })
  }
  
  deleteBtns.forEach( (deleteBtn) => {
    deleteBtn.addEventListener('click', ajaxCall)
  })
    
}

export { deleteRestaurant }