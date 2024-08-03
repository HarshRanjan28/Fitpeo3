import RatingComponent from "../RatingComponent";

interface feedbackProps {
  name: string;
  description: string;
}

const CustomerFeedBackList = (props: { feedback: feedbackProps }) => {
  const { feedback } = props;
  return (
    <div>
      <div className="flex p-3">
        <div className="w-10  rounded-full">
          <img src="/mydp.jpeg" alt="dp" className="rounded-full" />
        </div>
        <h2 className="text-white px-4">{feedback.name}</h2>
      </div>
      <RatingComponent />

      <div className="text-gray-400 px-3 pt-2">{feedback.description}</div>
      <div className="border-b-2 border-b-gray-700 my-2"></div>
    </div>
  );
};

export default CustomerFeedBackList;
