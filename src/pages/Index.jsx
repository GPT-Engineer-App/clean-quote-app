import { Box, Flex, Heading, Text, Input, Button, Checkbox, Stack, FormControl, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, SimpleGrid, Image, Link, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [address, setAddress] = useState("");
  const [size, setSize] = useState(50);
  const [rooms, setRooms] = useState(1);
  const [cleaningRequired, setCleaningRequired] = useState(false);
  const [bedSheets, setBedSheets] = useState(false);
  const [listings, setListings] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedListing, setSelectedListing] = useState(null);

  const handleSubmit = () => {
    const newListing = { address, size, rooms, cleaningRequired, bedSheets };
    setListings([...listings, newListing]);
    alert(`Listing created for address: ${address} with size: ${size} sqm and ${rooms} rooms. Cleaning required: ${cleaningRequired}, Bed sheets: ${bedSheets}`);
  };

  const handleViewDetails = (listing) => {
    setSelectedListing(listing);
    onOpen();
  };

  return (
    <Flex direction="column" align="center" justify="center" h="100vh" p={4} bgImage="url('/images/landing-page-background.jpg')" bgSize="cover">
      <Box w="full" maxW="md" p={6} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" shadow="lg">
        <Heading mb={6}>List Your Apartment</Heading>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="size">Size (in square meters)</FormLabel>
            <NumberInput min={10} max={1000} value={size} onChange={(valueString) => setSize(parseInt(valueString))}>
              <NumberInputField id="size" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="rooms">Number of Rooms</FormLabel>
            <NumberInput min={1} max={20} value={rooms} onChange={(valueString) => setRooms(parseInt(valueString))}>
              <NumberInputField id="rooms" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Checkbox isChecked={cleaningRequired} onChange={(e) => setCleaningRequired(e.target.checked)}>
            Cleaning Required
          </Checkbox>
          <Checkbox isChecked={bedSheets} onChange={(e) => setBedSheets(e.target.checked)}>
            Bed Sheets Provided
          </Checkbox>
          <Button colorScheme="blue" onClick={handleSubmit}>Submit Listing</Button>
        </Stack>
      </Box>
      <Box w="full" maxW="4xl" mt={10} bg="white" p={5} shadow="lg" borderRadius="lg">
        <Heading mb={4}>Listings</Heading>
        <SimpleGrid columns={3} spacing={10}>
          {listings.map((listing, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Heading fontSize="xl">{listing.address}</Heading>
              <Text mt={4}>Size: {listing.size} sqm</Text>
              <Text>Rooms: {listing.rooms}</Text>
              <Text>Cleaning: {listing.cleaningRequired ? 'Required' : 'Not Required'}</Text>
              <Text>Bed Sheets: {listing.bedSheets ? 'Provided' : 'Not Provided'}</Text>
              <Button color="teal.500" onClick={() => handleViewDetails(listing)}>View Details</Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      {selectedListing && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Listing Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text><strong>Address:</strong> {selectedListing.address}</Text>
              <Text><strong>Size:</strong> {selectedListing.size} sqm</Text>
              <Text><strong>Rooms:</strong> {selectedListing.rooms}</Text>
              <Text><strong>Cleaning Required:</strong> {selectedListing.cleaningRequired ? 'Yes' : 'No'}</Text>
              <Text><strong>Bed Sheets Provided:</strong> {selectedListing.bedSheets ? 'Yes' : 'No'}</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Flex>
  );
};

export default Index;