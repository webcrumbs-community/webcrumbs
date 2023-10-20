// import "./uploadplugin.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import { Input } from "@mui/material";
import Typography from "@mui/material/Typography";

export const UploadPlugin = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      author: "",
      file: null,
    },
  });

  const validateEmail = (value) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailPattern.test(value)) {
      return "Invalid email address";
    }

    return true;
  };

  const validateFileSize = (value) => {
    if (value && value[0]) {
      if (value[0].size > 10 * 1024 * 1024) {
        setError("file", {
          type: "validate",
          message: "File size exceeds 10MB",
        });
        return false;
      }
    }
    return true;
  };
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          rules={{ required: "Name is required" }}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.name}
              helperText={errors.name && errors.name.message}
            />
          )}
        />
        <Controller
          name="email"
          rules={{
            required: "Email is required",
            validate: validateEmail,
          }}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              margin="dense"
              error={!!errors.email}
              helperText={errors.email && errors.email.message}
            />
          )}
        />
        <Controller
          name="author"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-basic"
              label="Author"
              variant="outlined"
              fullWidth
              margin="dense"
            />
          )}
        />

        <Box margin="7px">
          <Input
            type="file"
            {...control.register("file", {
              required: "File is required",
              validate: {
                size: validateFileSize,
              },
            })}
            variant="outlined"
            margin="dense"
            fullWidth
            error={!!errors.file}
          />
        </Box>

        <Typography variant="caption" style={{ color: "red" }}>
          {errors.file && errors.file.message}
        </Typography>

        <Box margin="4px">
          <Button type="submit" size="large" variant="contained" margin="dense">
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};
