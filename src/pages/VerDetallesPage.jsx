import {
  Box,
  Heading,
  Link as ChakraLink,
  Center,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function VerDetallesPage() {
  return (
    <div>
      <Box position="relative" margin="2rem 0">
        <Image
          src="../../public/bicicleta-detalles.jpg"
          width="400px"
          height="350px"
        />

        <Heading
          width="300px"
          position="absolute"
          top="35%"
          left="17.5%"
          transform="translate(-50%, -50%)"
          color="white"
          fontSize="25px"
          fontWeight="bold"
          fontFamily="heading"
          bg="rgba(0, 0, 0, 0.3)"
          padding="0.5rem 1rem"
        >
          DOMINA EL TERRENO
        </Heading>
        <div className="links">
          <ChakraLink
            as={Link}
            to="/VerVideosPage"
            width="300px"
            position="absolute"
            top="75%"
            left="17.5%"
            textAlign="center"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize="20px"
            _hover={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              color: "black",
            }}
            _active={{
              opacity: 0.8,
            }}
            _focus={{
              boxShadow: "none",
            }}
            bg="rgba(255, 255, 255, 0.1)"
            border="1px solid white"
            borderRadius="md"
            padding="0.5rem 1rem"
          >
            Ver Videos
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/"
            width="300px"
            position="absolute"
            top="60%"
            left="17.5%"
            textAlign="center"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize="20px"
            _hover={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              color: "black",
            }}
            _active={{
              opacity: 0.8,
            }}
            _focus={{
              boxShadow: "none",
            }}
            bg="rgba(255, 255, 255, 0.1)"
            border="1px solid white"
            borderRadius="md"
            padding="0.5rem 1rem"
          >
            Ver Detalles
          </ChakraLink>
        </div>
      </Box>
    </div>
  );
}

export default VerDetallesPage;
