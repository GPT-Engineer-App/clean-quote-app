import { Box, Flex, Heading, Text, Button, Image, FormControl, FormLabel, Input, Checkbox, Select, useToast, VStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const toast = useToast();
  const [apartment, setApartment] = useState({
    address: '',
    size: '',
    rooms: '',
    frequency: '',
    cleaningSupplies: false,
    bedSheets: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setApartment(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    // Simulate a quote retrieval process
    const quote = `Estimated cleaning cost for ${apartment.size} sqm, ${apartment.rooms} room(s): $${(parseInt(apartment.size) * 0.5).toFixed(2)}`;
    toast({
      title: "Mock Quote",
      description: quote,
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Flex direction="column" align="center" justify="center" bgImage="url('/images/cleaning-service-banner.jpg')" bgPos="center" bgSize="cover" h="30vh">
        <Heading color="white" p={5}>GPT Engineer Cleaning Services</Heading>
        <Text color="white" mb={5}>Enter your apartment details to get a cleaning quote.</Text>
      </Flex>
      <Box p={5}>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input name="address" placeholder="1234 Main St" value={apartment.address} onChange={handleChange} />
          <FormLabel mt={4}>Size (in square meters)</FormLabel>
          <Input name="size" placeholder="120" value={apartment.size} onChange={handleChange} />
          <FormLabel mt={4}>Number of Rooms</FormLabel>
          <Input name="rooms" placeholder="3" value={apartment.rooms} onChange={handleChange} />
          <FormLabel mt={4}>Cleaning Frequency</FormLabel>
          <Select name="frequency" placeholder="Select frequency" value={apartment.frequency} onChange={handleChange}>
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
          </Select>
          <Checkbox name="cleaningSupplies" mt={4} isChecked={apartment.cleaningSupplies} onChange={handleChange}>Cleaning Supplies Provided</Checkbox>
          <Checkbox name="bedSheets" mt={4} isChecked={apartment.bedSheets} onChange={handleChange}>Bed Sheets Provided</Checkbox>
          <Button leftIcon={<FaPlus />} colorScheme="blue" mt={4} onClick={handleSubmit}>
            Get Quote
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Index;