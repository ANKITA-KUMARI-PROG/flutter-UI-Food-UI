
frappe.ui.form.on('Student Details', {
    refresh: function(frm) {
  
      frm.add_custom_button(__(' Student Email Address'), function(){
        frappe.msgprint(frm.doc.email);
    }, __("Utilities"));
   
  }
});
