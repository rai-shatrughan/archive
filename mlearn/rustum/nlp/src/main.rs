use rust_bert::pipelines::question_answering::{QaInput, QuestionAnsweringModel};
use rust_bert::pipelines::common::ModelType;
use rust_bert::pipelines::summarization::SummarizationModel;
use rust_bert::pipelines::translation::{
    Language, TranslationModelBuilder,
};
use tch::Device;

fn main()  {
    qna();
    translate();
    summary();
}

fn qna(){
    let qa_model = QuestionAnsweringModel::new(Default::default()).unwrap();

    // let question = String::from("What is Kafka?");
    let question = String::from("What are other opportunities?");
    let context = String::from("Apache Kafka is a publish/subscribe messaging system designed to solve this problem.
        It is often described as a “distributed commit log” or more recently as a “distributing
        streaming platform.” A filesystem or database commit log is designed to
        provide a durable record of all transactions so that they can be replayed to consistently
        build the state of a system. Similarly, data within Kafka is stored durably, in
        order, and can be read deterministically. In addition, the data can be distributed
        within the system to provide additional protections against failures, as well as significant opportunities for scaling performance.");
    let answers = qa_model.predict(&[QaInput { question, context }], 1, 32);
    println!("{:?}", answers);
    println!("{:?}", "---------------");
}

fn translate() {

    let model = TranslationModelBuilder::new()
        .with_device(Device::cuda_if_available())
        .with_model_type(ModelType::Marian)
        .with_source_languages(vec![Language::English])
        .with_target_languages(vec![Language::Hindi])
        .create_model().unwrap();

    //let input = ["I Love you"];
    let input = ["Where do you live"];

    let output = model.translate(&input, None, Language::Hindi);

    println!("{:?}", output);
    println!("{:?}", "---------------");
}

fn summary() {
    let model = SummarizationModel::new(Default::default()).unwrap();

    let input = ["While messages are opaque byte arrays to Kafka itself, it is recommended that additional
        structure, or schema, be imposed on the message content so that it can be easily
        understood. There are many options available for message schema, depending on
        your application’s individual needs. Simplistic systems, such as Javascript Object
        Notation (JSON) and Extensible Markup Language (XML), are easy to use and
        human-readable. However, they lack features such as robust type handling and compatibility between schema versions. Many Kafka developers favor the use of Apache
        Avro, which is a serialization framework originally developed for Hadoop. Avro provides
        a compact serialization format; schemas that are separate from the message payloads
        and that do not require code to be generated when they change; and strong data
        typing and schema evolution, with both backward and forward compatibility.
        A consistent data format is important in Kafka, as it allows writing and reading messages
        to be decoupled. When these tasks are tightly coupled, applications that subscribe
        to messages must be updated to handle the new data format, in parallel with
        the old format. Only then can the applications that publish the messages be updated
        to utilize the new format. By using well-defined schemas and storing them in a common
        repository, the messages in Kafka can be understood without coordination.
        Schemas and serialization are covered in more detail in Chapter 3."];

    let output = model.summarize(&input);
    println!("{:?}", output);
    println!("{:?}", "---------------");
}


