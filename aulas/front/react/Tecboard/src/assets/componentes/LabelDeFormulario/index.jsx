import './Label.css'

export function LabelDeFormulario ({children, htmlFor}) {
    return (
      <label htmlFor={htmlFor}>
        {children}
      </label>
  
    )
  }
