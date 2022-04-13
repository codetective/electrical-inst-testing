import { useRouter } from "next/router";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
export default function NavLink({ href, exact, children, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " active";
  }

  return (
    <Link href={href}>
      <a>
        <Text
          p="3"
          bg={isActive ? "orange.200" : "gray.100"}
          borderLeft={"2px solid"}
          borderLeftColor={isActive ? "brand.300" : "gray.400"}
          fontWeight={"600"}
          {...props}
          _hover={{
            bg: "orange.200",
          }}
          transition="all .5s ease"
        >
          {children}
        </Text>
      </a>
    </Link>
  );
}
