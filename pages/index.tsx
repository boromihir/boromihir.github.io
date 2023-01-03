import Head from 'next/head'
import {
  Box,
  Container,
  Heading,
  Highlight,
  Link,
  Stack,
  Text,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mihir Desai</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container maxW="4xl" mt="8rem">
        <Box>
          <Heading as="h1" size="3xl" noOfLines={2}>
            <Wrap>
              <WrapItem>Hello there,</WrapItem>
              <WrapItem>I&apos;m Mihir 🖖</WrapItem>
            </Wrap>
          </Heading>
        </Box>
        <Box>
          <Text fontSize="2xl" pt="4rem">
            <Highlight
              query="I'm a software engineer"
              styles={{ fontWeight: 'bold ' }}
            >
              I&apos;m a software engineer
            </Highlight>{' '}
            currently working at{' '}
            <Link href="https://keepworks.com" isExternal>
              KeepWorks <ExternalLinkIcon />
            </Link>
            .
            <br />
            I like to build things for the web. This website is intended to be a
            collection of things I make or things I find interesting, but mainly
            it serves as a venue to practice my writing.
            <br />
            Visit again and hopefully I might have something worthwhile.
          </Text>
        </Box>
        <Box>
          <Text fontSize="xl" pt="2rem">
            <Stack direction={['column', 'row']} spacing="24px">
              <Link href="https://github.com/boromihir" isExternal>
                GitHub <ExternalLinkIcon />
              </Link>
              <Link href="https://twitter.com/faramihir" isExternal>
                Twitter <ExternalLinkIcon />
              </Link>
            </Stack>
          </Text>
        </Box>
      </Container>
    </>
  )
}
