import { reactive } from "vue";


export default function useForm() {
    const values = reactive({
        email: '',
        telephone: '',
    });

    return {
        values,
    }
}