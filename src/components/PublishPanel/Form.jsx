import { Field, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const initialValues = {
  templateName: '',
  practiceId: null,
  templateSetId: null
}

const schema = {
  templateName: Yup.string().required(),
  practiceId: Yup.number().required(),
  templateSetId: Yup.number().required()
}

export default function Form({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validateYupSchema={schema}
      onSubmit={onSubmit}
    >
      {(errors, touched) => (
        <>
          <Field name='templateName' />
          {errors.templateName && touched.templateName && <div>{errors.templateName}</div>}
          <Field name='practiceId' />
          {errors.practiceId && touched.practiceId && <div>{errors.practiceId}</div>}
          <Field name='templateSetId' />
          {errors.templateSetId && touched.templateSetId && <div>{errors.templateSetId}</div>}
        </>
      )}
    </Formik>
  )
}
