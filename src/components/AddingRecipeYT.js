import { Formik, Field, Form, FiedArray, ErroMessage } from "formik";
// import * as Yup form 'yup';
// import { EditorState} from 'draft-js';
// import { RichEditorExample } from './RichEditor';
// import { Debug} from '../Debug';

const initialValues = {
    friends : [
        {
            name: "",
            email: "",
        },
    ],
};

const AddingRecipeYT = () => (
    <div>
        <h1>Invite friends</h1>
        <Formik
        initialValues={initialValues}
        onSubmit={values => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
            }, 500);
        }}
        >
            {({ isSubmitting}) => <Form>
                <div className="row">
                    <div className="col">
                        <Field name="name" type="text" />
                    </div>
                    <div className="col">
                        <Field name="email" type="email" />

                    </div>
                    <div className="col">
                        <button type="button">X</button>
                    </div>
                </div>
                <button type="button" disabled={isSubmitting}>Add Friend</button>
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </Form>}
        </Formik>
    </div>
)

export default AddingRecipeYT