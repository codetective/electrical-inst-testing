import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Upload({ image, caption, setImage, setCaption }) {
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <Stack as="form" spacing="5" pb="40px">
      <FormControl isRequired>
        <FormLabel htmlFor="image">Select Image</FormLabel>

        <Input
          type="file"
          accept="image/*"
          name="image"
          id="image"
          onChange={handleImage}
          size="lg"
        />
        {image && <FormHelperText>*image preview below</FormHelperText>}
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Caption</FormLabel>

        <Textarea
          name="message"
          placeholder="Brief description/caption"
          rows={6}
          resize="none"
          onChange={(e) => setCaption(e.target.value)}
          value={caption}
        />
      </FormControl>
      {image && <img src={URL.createObjectURL(image)} />}
    </Stack>
  );
}
