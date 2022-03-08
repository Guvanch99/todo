import S from './Modal.module.css'

const Modal=()=>(
  <>
    <article className={S.modal}>
      <h1 className={S.label}>Create To-Do</h1>
      <input className={S.input}/>
      <div className={S.buttonGroup}>
        <button className={S.btnCancel}>Cancel</button>
        <button className={S.btnCreate}>Create</button>
      </div>
    </article>
    <div className={S.appOverlay}/>
  </>
)

export default Modal