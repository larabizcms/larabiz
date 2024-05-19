export function mapErrorsToForm(res: any, setError: any) {
    if (res.payload.errors) {
        Object.keys(res.payload.errors).forEach((key: string) => {
            setError(key as "name" | "email" | "password" | "password_confirmation", {
                type: "manual",
                message: res.payload.errors[key][0],
            });
        });
    } else {
        setError('root', {
            type: "manual",
            message: res.payload.message,
        });
    }
}
