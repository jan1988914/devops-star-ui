import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Image from 'components/Image/Image';
import './index.scss';
import ReactMarkdown from 'react-markdown';

import styles from "assets/jss/material-kit-react/views/components.js";
import restAPI from "shared/restAPI";
import devops from 'articles/devops.md';

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [md, setMd] = useState('');

  useEffect(() => {
    restAPI.fetchMD(devops).then(res => setMd(res))
  }, []);

  return (
    <div>
      <Header
        brand="DevOps Star"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <main>
        <div className={classNames(classes.container, 'container')}>
          <GridContainer spacing={3}>
            <GridItem xs={6}>
              <h1>
                Find the world’s best DevOps experience
              </h1>
              <h4>
                DevOps Star是我们汇集众多行业所进行的一系列 DevOps 实践、敏捷实践、精益实践，
                为IT从业者提供最全面的工具使用以及最佳实践,帮助企业快速设计数字化时代的 DevOps 流程
              </h4>
            </GridItem>
            <GridItem xs={6} styles={{ textAlign: 'center' }}>
              <Image src={'relax-working.svg'} alt='relax-working' />
            </GridItem>
          </GridContainer>
        </div>
      </main>

      <section className={classNames(classes.container, 'icons')}>
        <Image src={'jenkins.png'} alt='jenkins' style={{ width: 100 }} />
        <Image src={'github.png'} alt='github' style={{ width: 100 }} />
        <Image src={'ansible.png'} alt='ansible' style={{ width: 100 }} />
      </section>

      <section className={classes.container}>
        <ReactMarkdown source={md} />
      </section>
    </div>
  );
}
