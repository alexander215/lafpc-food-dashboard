import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import {CarouselContainer, CarouselTitle} from "./styles"

const items = [
  {
    src: require('./c1.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('./c2.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('./c3.jpg'),
    altText: '',
    caption: ""
  }
];

class CaseStudyCarousel extends Component {
  constructor(props) {
    super(props);
    this.title = 'Qualitative Case Studies';
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
            <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
            >
                <img src={item.src} alt={item.altText} height="15%" width="40%"/>
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
      );
    });

    return (
        <CarouselContainer>
            <CarouselTitle>{this.title}</CarouselTitle>
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        </CarouselContainer>
    );
  }
}


export default CaseStudyCarousel;