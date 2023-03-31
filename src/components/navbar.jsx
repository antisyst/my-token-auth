import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";
import { MainLogo } from "@/icons/mainlogo";
import { motion, useScroll, useSpring } from "framer-motion";



    const Navigation = () => {
      const { scrollYProgress } = useScroll();
      const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });
      const { isDark } = useTheme();

      return(
        <Navbar isBordered={isDark} variant="sticky">
        <Navbar.Brand>
         <MainLogo className='navbar-main-import'/>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} href="
                https://publuu.com/flip-book/107813/289583" className="right-row-resume-index">
             Resume
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <motion.div className="progress-bar" style={{ scaleX }} />
      </Navbar>
      )
    }

    export default Navigation;