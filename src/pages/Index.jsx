import { Box, Flex, Heading, Text, Button, Image, FormControl, FormLabel, Input, Checkbox, Select, useToast, VStack, Link } from "@chakra-ui/react";
import { FaPlus, FaListAlt } from "react-icons/fa";
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

  const [apartments, setApartments] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setApartment(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    // Simulate a more realistic quote retrieval process
    const quote = `Estimated cleaning cost: $${(parseInt(apartment.size) * 0.5).toFixed(2)}`;
    toast({
      title: "Quotes Retrieved",
      description: quote,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setApartments([...apartments, apartment]);
  };

  return (
    <Box>
      <Flex direction="column" align="center" justify="center" bgImage="url('/images/cleaning-service-banner.jpg')" bgPos="center" bgSize="cover" h="30vh">
        <Heading color="white" p={5}>Welcome to GPT Engineer Cleaning Services</Heading>
        <Text color="white" mb={5}>Find the best cleaning services for your apartment!</Text>
      </Flex>
      <VStack spacing={8} p={5}>
        <Box w="full">
          <Heading size="lg" mb={5}>List Your Apartment</Heading>
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
          </FormControl>
          <Button leftIcon={<FaPlus />} colorScheme="blue" mt={4} onClick={handleSubmit}>
            Get Quotes
          </Button>
        </Box>
        <Box w="full">
          <Heading size="lg" mb={5}>Browse Apartments</Heading>
          {apartments.length > 0 ? (
            apartments.map((apt, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Text fontWeight="bold">Address: {apt.address}</Text>
                <Text>Size: {apt.size} sqm</Text>
                <Text>Rooms: {apt.rooms}</Text>
                <Text>Cleaning Frequency: {apt.frequency}</Text>
                <Text>Cleaning Supplies: {apt.cleaningSupplies ? 'Provided' : 'Not Provided'}</Text>
                <Text>Bed Sheets: {apt.bedSheets ? 'Provided' : 'Not Provided'}</Text>
              </Box>
            ))
          ) : (
            <Text>No listings available yet.</Text>
          )}
          <Link color="teal.500" href="#" mt={3} onClick={() => alert('Feature coming soon!')}><FaListAlt /> View All Listings</Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;