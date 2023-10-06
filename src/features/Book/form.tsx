import { useForm } from "react-hook-form";
import { type Book, useBooks } from './hooks'

type BookForm = Omit<Book, "id">

export const BookForm = () => {
  const { add } = useBooks()
  const { register, handleSubmit } = useForm<BookForm>({
    defaultValues: {
      title: "",
      description: ""
    }
  });

  const onSubmit = (data: BookForm) => add(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", { required: true })} />
      <input {...register("description")} />

      <input type="submit" />
    </form>
  )
}
