import { Box, Heading, Link as ChakraLink, Image } from "@chakra-ui/react";
import { Route, Routes, Link } from "react-router-dom";
import VerDetallesPage from "../pages/VerDetallesPage";
import VerVideosPage from "../pages/VerVideosPage";

function Header() {
  return (
    <div>
      <Box position="relative">
        <Image
          src="../../public/imagen-bicicleta.jpg"
          width="100%"
          height="350px"
        />

        <Heading
          position="absolute"
          top="46%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
          fontSize="45px"
          fontWeight="bold"
          fontFamily="heading"
        >
          DOMINA EL TERRENO
        </Heading>
        <div className="links">
          <ChakraLink
            as={Link}
            to="/VerVideosPage"
            position="absolute"
            top="70%"
            left="60%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize="30px"
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
            position="absolute"
            top="70%"
            left="40%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize="30px"
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
      <Routes>
        <Route path="/" element={<VerDetallesPage />} />
        <Route path="VerVideosPage" element={<VerVideosPage />} />
        <Route path="*" element={<h3>404 - Error</h3>} />
      </Routes>
    </div>
  );
}

export default Header;
