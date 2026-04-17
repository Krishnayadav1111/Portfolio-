import { Alert, Button, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { ContactRequest } from '../services/portfolioApi'
import { useSendContactMutation } from '../services/portfolioApi'

export function ContactFormContainer() {
  const [isSent, setIsSent] = useState(false)
  const [sendContact, { isLoading }] = useSendContactMutation()
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<ContactRequest>({
    defaultValues: { email: '', message: '', name: '' },
  })

  /* WHY: React Hook Form keeps field updates out of React render state until
     validation or submission matters, which scales better for larger forms. */
  const onSubmit = handleSubmit(async (values) => {
    await sendContact(values).unwrap()
    setIsSent(true)
    reset()
  })

  return (
    <Stack component="form" spacing={2.5} onSubmit={onSubmit} noValidate sx={{ width: '100%' }}>
      {isSent ? (
        <Alert severity="success">
          Message simulated successfully. The RTK mutation completed.
        </Alert>
      ) : null}
      <TextField
        label="Name"
        error={Boolean(errors.name)}
        helperText={errors.name?.message}
        {...register('name', { required: 'Name is required.' })}
      />
      <TextField
        label="Email"
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
        {...register('email', {
          required: 'Email is required.',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Use a valid email address.',
          },
        })}
      />
      <TextField
        label="Message"
        multiline
        minRows={5}
        error={Boolean(errors.message)}
        helperText={errors.message?.message}
        {...register('message', {
          required: 'Message is required.',
          minLength: { value: 12, message: 'Share at least 12 characters.' },
        })}
      />
      <Button disabled={isLoading} type="submit" variant="contained" size="large">
        {isLoading ? 'Sending...' : 'Send message'}
      </Button>
    </Stack>
  )
}
