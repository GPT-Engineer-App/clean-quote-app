import { Box, Flex, Heading, Text, Button, Image, FormControl, FormLabel, Input, Checkbox, Select } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" bgImage="url('/images/cleaning-service-banner.jpg')" bgPos="center" bgSize="cover" h="30vh">
        <Heading color="white" p={5}>Welcome to GPT Engineer Cleaning Services</Heading>
        <Text color="white" mb={5}>Find the best cleaning services for your apartment!</Text>
      </Flex>
      <Box p={5}>
        <Heading size="lg" mb={5}>List Your Apartment</Heading>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input placeholder="1234 Main St" />
          <FormLabel mt={4}>Size (in square meters)</FormLabel>
          <Input placeholder="120" />
          <FormLabel mt={4}>Number of Rooms</FormLabel>
          <Input placeholder="3" />
          <FormLabel mt={4}>Cleaning Frequency</FormLabel>
          <Select placeholder="Select frequency">
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
          </Select>
          <Checkbox mt={4}>Cleaning Supplies Provided</Checkbox>
          <Checkbox mt={4}>Bed Sheets Provided</Checkbox>
        </FormControl>
        <Button leftIcon={<FaPlus />} colorScheme="blue" mt={4}>
          Get Quotes
        </Button>
      </Box>
    </Box>
  );
};

export default Index;