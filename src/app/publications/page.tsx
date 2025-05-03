import React from 'react'
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Pulbications() {
  return (
    <div className="m-4">
      <h2 className="text-4xl font-bold mb-6">Publications</h2>
      <section>

        <h2 className="text-2xl font-bold mb-2">2025</h2>
        <p className="mb-6">
          N/A
        </p>

      </section>

      <section>

        <h2 className="text-2xl font-bold mb-2">2024</h2>
        <p className="mb-3">Xu, Z., & Sheng, V. S. (2024, March). Detecting AI-Generated Code Assignments Using Perplexity of Large Language Models. In Proceedings of the AAAI Conference on Artificial Intelligence (AAAI) (Vol. 38, No. 21, pp. 23155-23162).</p>
        <p className="mb-3">Xu, Z., & Sheng, V. S. (2024, September). Towards Minimal Edits in Automated Program Repair: A Hybrid Framework Integrating Graph Neural Networks and Large Language Models. In International Conference on Artificial Neural Networks (ICANN) (pp. 402-416). Cham: Springer Nature Switzerland.</p>
        <p className="mb-3">Gao, L., Zhan, H., & Sheng, V. S. (2024, September). Exploring Task-Specific Dimensions in Word Embeddings Through Automatic Rule Learning. In International Conference on Artificial Neural Networks (ICANN) (pp. 199-214). Cham: Springer Nature Switzerland.</p>
        <p className="mb-3">Zhan, H., Gao, L., & Sheng, V. S. (2024, June). Privacy-Preserving Unsupervised Spherical Text Embeddings. In 2024 International Joint Conference on Neural Networks (IJCNN) (pp. 1-8). IEEE.</p>
        <p className="mb-3">Xu, Z., Xu, R., & Sheng, V. S. (2024, June). Beyond Binary Classification: Customizable Text Watermark on Large Language Models. In 2024 International Joint Conference on Neural Networks (IJCNN) (pp. 1-8). IEEE</p>
        <p className="mb-3">Chen, Z., He, Y., Wu, D., Zhan, H., Sheng, V. S., & Zhang, K. (2024). Robust Sparse Online Learning for Data Streams with Streaming Features. In Proceedings of the 2024 SIAM International Conference on Data Mining (SDM) (pp. 181-189). Society for Industrial and Applied Mathematics.</p>
        <p className="mb-3">Hao, Y., Zhao, P., Qu, J., Zhao, L., Liu, G., Zhuang, F., Sheng, V. S., & Zhou, X. (2024, May). Meta-optimized Structural and Semantic Contrastive Learning for Graph Collaborative Filtering. In 2024 IEEE 40th International Conference on Data Engineering (ICDE) (pp. 679-691). IEEE.</p>
        <p className="mb-3">Qin, X., Yuan, H., Zhao, P., Liu, G., Zhuang, F., & Sheng, V. S. (2024, March). Intent Contrastive Learning with Cross Subsequences for Sequential Recommendation. In Proceedings of the 17th ACM International Conference on Web Search and Data Mining (WSDM) (pp. 548-556).</p>
        <p className="mb-3">Hao, Y., Zhao, P., Fang, J., Qu, J., Liu, G., Zhuang, F., Sheng, V. S., & Zhou, X. (2024, May). Meta-Optimized Joint Generative and Contrastive Learning for Sequential Recommendation. In 2024 IEEE 40th International Conference on Data Engineering (ICDE) (pp. 705-718). IEEE.</p>
        <p className="mb-3">Xu, R., Xu, Z., Li, G., & Sheng, V. S. (2024, March). Bridging the Gap between Source Code and Requirements Using GPT (student abstract). In Proceedings of the AAAI Conference on Artificial Intelligence (AAAI) (Vol. 38, No. 21, pp. 23686-23687).</p>
        <p className="mb-3">Xu, Z., Xu, R., & Sheng, V. S. (2024, March). ChatGPT-Generated Code Assignment Detection Using Perplexity of Large Language Models (student abstract). In Proceedings of the AAAI Conference on Artificial Intelligence (AAAI) (Vol. 38, No. 21, pp. 23688-23689).</p>
        <p className="mb-3">Sun, L., & Sheng, V. S. (2024, March). DDViT: Double-Level Fusion Domain Adapter Vision Transformer (Student Abstract). In Proceedings of the AAAI Conference on Artificial Intelligence (AAAI) (Vol. 38, No. 21, pp. 23661-23663).</p>
        <p className="mb-6">Gao, L., Zhang, M., & Sheng, V. S. (2024, March). Enhancing Transcription Factor Prediction through Multi-Task Learning (Student Abstract). In Proceedings of the AAAI Conference on Artificial Intelligence (AAAI) (Vol. 38, No. 21, pp. 23500-23502).</p>

      </section>

      <section>

        <h2 className="text-2xl font-bold mb-2">2023</h2>
        <p className="mb-3">Zhan, H., Gao, L., Zhang, K., Chen, Z., & Sheng, V. S. (2023, October). Defending the Graph Reconstruction Attacks for Simplicial Neural Networks. In 2023 IEEE 10th International Conference on Data Science and Advanced Analytics (DSAA) (pp. 1-9). IEEE.</p>
        <p className="mb-3">Gupta, H. D., & Sheng, V. S. (2023, December). Neurosymbolic Knowledge Distillation. In 2023 IEEE International Conference on Big Data (BigData) (pp. 5243-5249). IEEE.</p>
        <p className="mb-3">Xu, R., Li, G., Jin, W., Chen, A., & Sheng, V. S. (2023, June). ACCD: an adaptive clustering-based collusion detector in crowdsourcing (student abstract). In Proceedings of the AAAI Conference on Artificial Intelligence (AAAI) (Vol. 37, No. 13, pp. 16370-16371).</p>
        <p className="mb-3">Zhan, H., & Sheng, V. S. (2023, June). Privacy-preserving representation learning for text-attributed networks with simplicial complexes (student abstract). In Proceedings of the AAAI Conference on Artificial Intelligence (AAAI) (Vol. 37, No. 13, pp. 16143-16144).</p>
        <p className="mb-3">Xu, R., Li, G., Jin, W., Chen, A., & Sheng, V. S. (2023, July). Adaptive Clustering-Based Collusion Detection in Crowdsourcing. In International Conference on Intelligent Computing (ICIC) (pp. 261-275). Singapore: Springer Nature Singapore.</p>
        <p className="mb-3">Xu, Z., Lu, K., & Sheng, V. S. (2023, June). Logic error localization and correction with machine learning (student abstract). In Proceedings of the AAAI Conference on Artificial Intelligence (AAAI) (Vol. 37, No. 13, pp. 16372-16373)..</p>
        <p className="mb-3">Zhan, H., Zhang, K., Lu, K., & Sheng, V. S. (2023, September). Measuring the privacy leakage via graph reconstruction attacks on simplicial neural networks (student abstract). In Proceedings of the AAAI Conference on Artificial Intelligence (AAAI) (Vol. 37, No. 13, pp. 16380-16381).</p>
        <p className="mb-3">Gao, L., Zhan, H., Chen, A., & Sheng, V. S. (2023, June). Towards fair and selectively privacy-preserving models using negative multi-task learning (student abstract). In Proceedings of the AAAI Conference on Artificial Intelligence (AAAI) (Vol. 37, No. 13, pp. 16214-16215).</p>
        <p className="mb-6">Gao, L., Shu, K., Zhang, J., & Sheng, V. S. (2023, December). Explainable Transcription Factor Prediction with Protein Language Models. In 2023 IEEE International Conference on Bioinformatics and Biomedicine (BIBM) (pp. 853-856). IEEE.</p>

      </section>

      <section>

        <h2 className="text-2xl font-bold mb-2">2022</h2>
        <p className="mb-3">Shi, H., Du, H., Hao, Y., Sheng, V. S., Cui, Z., & Zhao, P. (2022, August). Self-guided Contrastive Learning for Sequential Recommendation. In Asia-Pacific Web (APWeb) and Web-Age Information Management (WAIM) Joint International Conference on Web and Big Data (pp. 72-86). Cham: Springer Nature Switzerland</p>
        <p className="mb-3">Chen, Z., Zhan, H., Sheng, V. S., Edwards, A., & Zhang, K. (2022, November). Projection Dual Averaging Based Second-order Online Learning. In 2022 IEEE International Conference on Data Mining (ICDM) (pp. 51-60). IEEE.</p>
        <p className="mb-3">Chen, Z., Zhan, H., Sheng, V. S., Edwards, A., & Zhang, K. (2022, December). Proximal Cost-sensitive Sparse Group Online Learning. In 2022 IEEE International Conference on Big Data (BigData) (pp. 495-504). IEEE.</p>
        <p className="mb-3">Du, H., Shi, H., Zhao, P., Wang, D., Sheng, V. S., Liu, Y., Liu, G., & Zhao, L. (2022, October). Contrastive Learning with Bidirectional Transformers for Sequential Recommendation. In Proceedings of the 31st ACM International Conference on Information & Knowledge Management (CIKM) (pp. 396-405).</p>
        <p className="mb-3">Fang, Y., Zhao, P., Xian, X., Fang, J., Liu, G., Liu, Y., & Sheng, V. S. (2022, July). Quaternion-Based Graph Contrastive Learning for Recommendation. In 2022 International Joint Conference on Neural Networks (IJCNN) (pp. 1-8). IEEE.</p>
        <p className="mb-3">Huang, M., Zhao, P., Xian, X., Qu, J., Liu, G., Liu, Y., & Sheng, V. S. (2022, July). Help from Meta-Path: Node and Meta-Path Contrastive Learning for Recommender Systems. In 2022 International Joint Conference on Neural Networks (IJCNN) (pp. 01-08). IEEE.</p>
        <p className="mb-3">Zhang, H., Zhao, P., Xian, X., Sheng, V. S., Hao, Y., & Cui, Z. (2022). Click is Not Equal to Purchase: Multi-task Reinforcement Learning for Multi-behavior Recommendation. In International Conference on Web Information Systems Engineering (WISE) (pp. 443-459). Springer, Cham.</p>
        <p className="mb-3">Shi, H., Du, H., Hao, Y., Sheng, V. S., Cui, Z., & Zhao, P. (2022, August). Self-guided Contrastive Learning for Sequential Recommendation. In Asia-Pacific Web (APWeb) and Web-Age Information Management (WAIM) Joint International Conference on Web and Big Data (pp. 72-86). Cham: Springer Nature Switzerland.</p>

      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">2021</h2>
        <p className="mb-3">Zhou, Y., Zhang, Z., Wu, S., Sheng, V. S., Han, X., Zhang, Z., & Jin, R. (2021, April). Robust Network Alignment via Attack Signal Scaling and Adversarial Perturbation Elimination. In Proceedings of the Web Conference 2021 (WWW) (pp. 3884-3895).</p>
        <p className="mb-3">Zhan, H., Zhang, K., Hu, C., & Sheng, V. S. (2021, October). Multi-objective Privacy-preserving Text Representation Learning. In Proceedings of the 30th ACM International Conference on Information & Knowledge Management (CIKM), (pp. 3612-3616). 1-5 November 2021, Queensland, Australia.</p>
        <p className="mb-3">Zhao, J., Zhao, P., Zhao, L., Liu, Y., Sheng, V. S., & Zhou, X. (2021, April). Variational Self-attention Network for Sequential Recommendation. In 2021 IEEE 37th International Conference on Data Engineering (ICDE) (pp. 1559-1570). IEEE</p>
        <p className="mb-3">Zhan, H., Zhang, K., Hu, C., & Sheng, V. S. (2021, November). K2-GNN: Multiple Users’ Comments Integration with Probabilistic K-Hop Knowledge Graph Neural Networks. In Asian Conference on Machine Learning (ACML) (pp. 1477-1492). PMLR.</p>
        <p className="mb-3">Zheng, S., Xian, X., Hao, Y., Sheng, V. S., Cui, Z., & Zhao, P. (2021, October). Exploiting Intra and Inter-field Feature Interaction with Self-Attentive Network for CTR Prediction. In International Conference on Web Information Systems Engineering (WISE) (pp. 34-49). Springer, Cham.</p>
        <p className="mb-3">Li, Y., Xian, X., Zhao, P., Liu, Y., & Sheng, V. S. (2021, October). MGSAN: A Multi-granularity Self-attention Network for Next POI Recommendation. In International Conference on Web Information Systems Engineering (WISE) (pp. 193-208). Springer, Cham.</p>
        <p className="mb-3">Li, C., Hao, Y., Zhao, P., Zhuang, F., Liu, Y., & Sheng, V. S. (2021). Tell Me Where to Go Next: Improving POI Recommendation via Conversation. In 26th International Conference on Database Systems for Advanced Applications (DASFAA) (pp. 211-227). Springer Science and Business Media Deutschland GmbH</p>
        <p className="mb-3">Tian, X., Hao, Y., Zhao, P., Wang, D., Liu, Y., & Sheng, V. S. (2021). Considering Interaction Sequence of Historical Items for Conversational Recommender System. In 26th International Conference on Database Systems for Advanced Applications (DASFAA) (pp. 115-131). Springer Science and Business Media Deutschland GmbH.</p>
        <p className="mb-3">Liu, B., Zhao, P., Zhuang, F., Xian, X., Liu, Y., & Sheng, V. S. (2021). Knowledge-Aware Hypergraph Neural Network for Recommender Systems. In 26th International Conference on Database Systems for Advanced Applications (DASFAA) (pp. 132-147). Springer Science and Business Media Deutschland GmbH.</p>
        <p className="mb-6">Li, Y., Zhao, P., Wang, D., Xian, X., Liu, Y., & Sheng, V. S. (2021). Learning Disentangled User Representation Based on Controllable VAE for Recommendation. In 26th International Conference on Database Systems for Advanced Applications (DASFAA) (pp. 179-194). Springer Science and Business Media Deutschland GmbH.</p>
      </section>

      <section>

        <h2 className="text-2xl font-bold mb-2">2020</h2>
        <p className="mb-3">Shi, W., Sheng, V. S., Li, X., & Gu, B. (2020, August). Semi-Supervised Multi-Label Learning from Crowds via Deep Sequential Generative Model. In Proceedings of the 26th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining (KDD) (pp. 1141-1149).</p>
        <p className="mb-3">Luo, A., Zhao, P., Liu, Y., Zhuang, F., Wang, D., Xu, J., Fang, J., & Sheng, V. S. (2020, July). Collaborative Self-Attention Network for Session-based Recommendation. In Proceedings of the 29th International Joint Conference on Artificial Intelligence (IJCAI) (pp. 2591-2597)</p>
        <p className="mb-3">Zhang, J., Wang, H., Meng, S., & Sheng, V. S. (2020, April). Interactive Learning with Proactive Cognition Enhancement for Crowd Workers. In Proceedings of the AAAI Conference on Artificial Intelligence (AAAI) (Vol. 34, No. 01, pp. 540-547).</p>
        <p className="mb-3">Liu, J., Zhao, P., Zhuang, F., Liu, Y., Sheng, V. S., Xu, J., Zhou, X., & Xiong, H. (2020, April). Exploiting Aesthetic Preference in Deep Cross Networks for Cross-domain Recommendation. In Proceedings of The Web Conference 2020 (WWW) (pp. 2768-2774).</p>
        <p className="mb-3">Yan, H., Zhao, P., Zhuang, F., Wang, D., Liu, Y., & Sheng, V. S. (2020, September). Cross-Domain Recommendation with Adversarial Examples. In International Conference on Database Systems for Advanced Applications (DASFAA) (pp. 573-589). Springer, Cham.</p>
        <p className="mb-3">Zhao, J., Zhao, P., Liu, Y., Sheng, V. S., Li, Z., & Zhao, L. (2020, September). Hierarchical Variational Attention for Sequential Recommendation. In International Conference on Database Systems for Advanced Applications (DASFAA) (pp. 523-539). Springer, Cham.</p>
        <p className="mb-3">Ma, J., Zhao, P., Liu, Y., Sheng, V. S., Xu, J., & Zhao, L. (2020, September). Modeling Periodic Pattern with Self-Attention Network for Sequential Recommendation. In International Conference on Database Systems for Advanced Applications (DASFAA) (pp. 557-572). Springer, Cham.</p>
        <p className="mb-3">Wu, Y., Zhao, P., Liu, Y., Sheng, V. S., Fang, J., & Zhuang, F. (2020, September). Vector-Level and Bit-Level Feature Adjusted Factorization Machine for Sparse Prediction. In International Conference on Database Systems for Advanced Applications (DASFAA) (pp. 386-402). Springer, Cham.</p>
        <p className="mb-3">Ni, J., Zhao, P., Xu, J., Fang, J., Li, Z., Xian, X., Cui, Z., & Sheng, V. S. (2020, August). Spatio-Temporal Self-Attention Network for Next POI Recommendation. In Asia-Pacific Web (APWeb) and Web-Age Information Management (WAIM) Joint International Conference on Web and Big Data (pp. 409-423). Springer, Cham.</p>
        <p className="mb-3">Yang, L., Chen, T., Zhang, J., Long, J., Hu, Z., & Sheng, V. S. (2020, August). Fruited-Forest: A Reachability Querying Method Based on Spanning Tree Modelling of Reduced DAG. In Asia-Pacific Web (APWeb) and Web-Age Information Management (WAIM) Joint International Conference on Web and Big Data (pp. 145-153). Springer, Cham.</p>
        <p className="mb-6">Zhu, X., Zhao, P., Xu, J., Fang, J., Zhao, L., Xian, X., Cui, Z., & Sheng, V. S. (2020, August). Knowledge Graph Attention Network Enhanced Sequential Recommendation. In Asia-Pacific Web (APWeb) and Web-Age Information Management (WAIM) Joint International Conference on Web and Big Data (pp. 181-195). Springer, Cham.</p>

      </section>

      <section>
        
        <h2 className="text-2xl font-bold mb-2">2019</h2>
        <p className="mb-3">Sheng, V. S., & Zhang, J. (2019). Machine Learning with Crowdsourcing: A Brief Summary of the Past Research and Future Directions. In Proceedings of the 33rd National Conference on Artificial Intelligence (AAAI): 9837-9843. January 27 – February 1, Honolulu, Hawaii, USA.</p>
        <p className="mb-3">Zhao, P., Zhu, H., Liu, Y., Xu, J., Li, Z., Zhuang, F., Sheng, V. S., & Zhou, X. (2019). Where to Go Next: A Spatio-temporal LSTM model for Next POI Recommendation., In Proceedings of the 33rd National Conference on Artificial Intelligence (AAAI): 5877-5884. January 27 – February 1, Honolulu, Hawaii, USA.</p>
        <p className="mb-3">Zhang, T., Zhao, P., Liu, Y., Sheng, V. S., Xu, J., Wang, D., ... & Zhou, X. (2019, January). Feature-level deeper self-attention network for sequential recommendation. In Proceedings of the 28th International Joint Conference on Artificial Intelligence (IJCAI) (pp. 4320-4326). AAAI Press</p>
        <p className="mb-3">Xu, C., Zhao, P., Liu, Y., Sheng, V. S., Xu, J., Zhuang, F., ... & Zhou, X. (2019, January). Graph contextualized self-attention network for session-based recommendation. In Proceedings of the 28th International Joint Conference on Artificial Intelligence (IJCAI) (pp. 3940-3946)</p>
        <p className="mb-3">Zhang, T., Zhao, P., Liu, Y., Xu, J., Fang, J., Zhao, L., Sheng, V. S., Cui, Z. (2019). AdaCML: Adaptive Collaborative Metric Learning for Recommendation. In International Conference on Database Systems for Advanced Applications (DASFAA) (2) 2019: 301-316</p>
        <p className="mb-3">Liu, J., Zhao, P., Liu, Y., Xu, J., Fang, J., Zhao, L., Sheng, V. S., Cui, Z. (2019). Attention and Convolution Enhanced Memory Network for Sequential Recommendation. In International Conference on Database Systems for Advanced Applications (DASFAA) (2) 2019: 333-349</p>
        <p className="mb-3">Xu, C., Zhao, P., Liu, Y., Xu, J., S. Sheng, V. S. S., Cui, Z., ... & Xiong, H. (2019, May). Recurrent convolutional neural network for sequential recommendation. In The World Wide Web Conference (WWW) (pp. 3398-3404).</p>
        <p className="mb-6">Qian, Y., Zhao, P., Li, Z., Fang, J., Zhao, L., Sheng, V. S., & Cui, Z. (2019, November). Interaction Graph Neural Network for News Recommendation. In International Conference on Web Information Systems Engineering (WISE) (pp. 599-614). Springer, Cham.</p>

      </section>

      <section>
        
        <h2 className="text-2xl font-bold mb-2">2018</h2>
        <p className="mb-6">Zhu, H., Zhao, P., Li, Z., Xu, J., Zhao, L., & Sheng, V. S. (2018). Exploiting Implicit Social Relationship for Point-of-Interest Recommendation. APWeb-WAIM Joint Conference on Web and Big Data 2018 (APWeb-WAIM) (pp. 280-297), July 23-25, 2018, Macau, China.</p>

      </section>

      <section>
        
        <h2 className="text-2xl font-bold mb-2">2017</h2>
        <p className="mb-3">Wu, J., Guo, A., Sheng, V. S., Zhao, P. & Cui, Z. (2017). Adaptive Low-Rank Multi-Label Active Learning for Image Classification. In Proceedings of the 25th ACM International Conference on Multimedia (ACM MM) (pp. 1336-1344). Mountain View, CA USA. October 23 ~ 27 2017 (Acceptance rate: 28%)</p>
        <p className="mb-3">Zhao, P., Xu, X., Liu, Y., Sheng, V. S., Zheng, K., & Xiong, H. (2017). Photo2Trip: Exploiting Visual Contents in Geo-tagged Photos for Personalized Tour Recommendation. In Proceedings of the 25th ACM International Conference on Multimedia (ACM MM) (pp. 916-924). Mountain View, CA USA. October 23 ~ 27 2017 (Acceptance rate: 28%)</p>
        <p className="mb-3">Zhang, J., Sheng, V. S., & Li, T. (2017, August). Label Aggregation for Crowdsourcing with Bi-Layer Clustering. The 40th International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR) (921-924). August 7-11, 2017, Tokyo, Japan. (Acceptance rate: 30%)</p>
        <p className="mb-3">Long, Y., Zhao, P., Sheng, V. S., Liu, G., Xu, J., Wu, J. & Cui, Z. (2017, October). Social Personalized Ranking Embedding for Next POI Recommendation. International Conference on Web Information Systems Engineering (WISE) (pp. 91-105). October 7-11, 2017, Moscow, Russia</p>
        <p className="mb-3">Wu, J., Zhao, S., Sheng, V. S., Zhao, P., & Cui, Z. (2017, July). Mutli-Label Active Learning with Low-Rank Mapping for Image Classification. In Multimedia and Expo (ICME), 2017 IEEE International Conference on (pp. 259-264). July 10-14, 2017, Hong Kong, China. IEEE. (Acceptance rate: 30%)</p>
        <p className="mb-6">Wang, Q., Sheng, V. S., & Wu, X. (2017, February) Keyphrase Extraction with Sequential Pattern Mining. In Proceedings of the 31st National Conference on Artificial Intelligence (AAAI) (extended abstract and poster) (pp. 5003-5004). February 4-9, San Francisco, California.</p>

      </section>

      <section>
        
        <h2 className="text-2xl font-bold mb-2">2016</h2>
        <p className="mb-3">Jiang, H., Zhao, P., Sheng, V. S., Xu, J., Liu, A., Wu, J., & Cui, Z. (2016, April). An Efficient Location-Aware Top-k Subscription Matching for Publish/Subscribe with Boolean Expressions. In International Conference on Database Systems for Advanced Applications (DASFAA) (pp. 335-350). April 16-19, Dallas, Texas, USA. Springer International Publishing.</p>
        <p className="mb-6">Li, C., Zhao, P., Sheng, V. S., Li, Z., Liu, G., Wu, J., & Cui, Z. (2016, June). A Hybrid Machine-Crowdsourcing Approach for Web Table Matching and Cleaning. In International Conference on Web-Age Information Management (WAIM) (pp. 132-144). June 3-5, Nanchang, Jiangxi, China. Springer International Publishing.</p>

      </section>

      <section>
        
        <h2 className="text-2xl font-bold mb-2">2015</h2>
        <p className="mb-3">Nicholson, B.A., Zhang, J., Sheng, V. S., & Wang, Z. (2015, October). Label Noise Correction Methods. In 2015 IEEE International Conference on Data Science and Advanced Analytics (DSAA) (pp. 1-9). IEEE.</p>
        <p className="mb-3">Nicholson, B.A., Sheng, V. S., & Zhang, J. (2015, September). Noise Correction of Image Labeling in Crowdsourcing. In 2015 IEEE International Conference on Image Processing (ICIP) (pp. 1458-1462). IEEE.</p>
        <p className="mb-3">Zhao, S., Wu, J., Sheng, V. S., Ye, C., Zhao, P., & Cui, Z. (2015, October). Weak Labeled Multi-Label Active Learning for Image Classification. In Proceedings of the 23rd ACM international conference on Multimedia (ACM MM) (pp. 1127-1130). October 26-30, Brisbane, Australia. ACM.</p>
        <p className="mb-3">Zhang, J., Sheng, V. S., Wu, J., Fu, X., & Wu, X. (2015, October). Improving Label Quality in Crowdsourcing Using Noise Correction. In Proceedings of the 24th ACM International Conference on Information and Knowledge Management (CIKM) (pp. 1931-1934).</p>
        <p className="mb-3">Ai, X., Wu, J., Sheng, V.S., Yao, Y., Zhao, P., & Cui, Z. (2015, October). Best First Over-Sampling for Multilabel Classification. In Proceedings of the 24th ACM International Conference on Information and Knowledge Management (CIKM) (pp. 1803-1806).</p>
        <p className="mb-3">Fang, H., Zhao, P., Sheng, V. S., Li, Z., Xu, J., Wu, J., & Cui, Z. (2015, November). Ranked Reverse Boolean Spatial Keyword Nearest Neighbors Search. In International Conference on Web Information Systems Engineering (WISE) (pp. 92-107). October 18-20, Miami, Florida, USA. Springer International Publishing. (Best Student Paper Award Finalist)</p>
        <p className="mb-3">Jiang, H., Zhao, P., Sheng, V. S., Liu, G., Liu, A., Wu, J., & Cui, Z. (2015, November). An Efficient Location-Aware Publish/Subscribe Index with Boolean Expressions. In International Conference on Web Information Systems Engineering (WISE) (pp. 216-231). October 18-20, Miami, Florida, USA. Springer International Publishing.</p>
        <p className="mb-3">Ye, C., Wu, J., Sheng, V. S., Zhao, P., & Cui, Z. (2015, September). Multi-label active learning with label correlation for image classification. In Image Processing (ICIP), 2015 IEEE International Conference on (pp. 3437-3441). Sept. 27-30, Quebec City, Canada. IEEE.</p>
        <p className="mb-3">Gu, B., Sheng, V. S., & Li, S. (2015, June). Bi-parameter space partition for cost-sensitive SVM. In Proceedings of the 24th International Joint Conference on Artificial Intelligence (IJCAI) (pp. 3532-3539). July 25-31, Buenos Aires, Argentina. AAAI Press</p>
        <p className="mb-3">Ye, C., Wu, J., Sheng, V. S., Zhao, S., Zhao, P., & Cui, Z. (2015, June). Multi-label active learning with Chi-square statistics for image classification. In Proceedings of the 5th ACM on International Conference on Multimedia Retrieval (ICMR 2015) (pp. 583-586). Shanghai, China. ACM.</p>
        <p className="mb-3">Ai, X., Wu, J., Sheng, V. S., Zhao, P., Yao, Y., & Cui, Z. (2015, May). Immune Centroids Over-Sampling Method for Multi-Class Classification. In Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD) (pp. 251-263). May 19-22, Ho Chi Minh City, Vietnam. Springer International Publishing.</p>
        <p className="mb-3">Zhao, P., Kuang, X., Sheng, V. S., Xu, J., Wu, J., & Cui, Z. (2015, April). Scalable Top-k Spatial Image Search on Road Networks. In International Conference on Database Systems for Advanced Applications (DASFAA) (pp. 379-396). April, Hanoi, Vietnam. Springer International Publishing.</p>
        <p className="mb-3">Xu, H., Zhao, P., Sheng, V. S., Liu, G., Zhao, L., Wu, J., & Cui, Z. (2015, June). Batch Mode Active Learning for Networked Data with Optimal Subset Selection. In International Conference on Web-Age Information Management (WAIM) (pp. 96-108). Springer International Publishing.</p>
        <p className="mb-3">Zhou, Z., Zhao, P., Sheng, V. S., Xu, J., Li, Z., Wu, J., & Cui, Z. (2015, June). Effective Sampling of Points of Interests on Maps Based on Road Networks. In International Conference on Web-Age Information Management (WAIM) (pp. 563-566). Springer International Publishing.</p>
        <p className="mb-6">Liu, Y., Zhao, P., Sheng, V. S., Li, Z., Liu, A., Wu, J., & Cui, Z. (2015, June). RPCV: Recommend Potential Customers to Vendors in Location-Based Social Network. In International Conference on Web-Age Information Management (WAIM) (pp. 272-284). Springer International Publishing.</p>

      </section>

      <section>
        
        <h2 className="text-2xl font-bold mb-2">2005-2014</h2>
        <p className="mb-3">Wu, J., Sheng, V. S., Zhang, J., Zhao, P., & Cui, Z. (2014, October). Multi-label active learning for image classification. In 2014 IEEE International Conference on Image Processing (ICIP) (pp. 5227-5231). Oct. 27-30, Paris, France. IEEE</p>
        <p className="mb-3">Tawiah, C. A., & Sheng, V. S., (2013, June). Empirical Comparison of Multi-Label Classification Algorithms. In Proceedings of the 27th National Conference on Artificial Intelligence (AAAI) (pp. 1645-1646) (extended abstract and poster). July 14-18, Bellevue, Washington. AAAI.</p>
        <p className="mb-3">Eichelberger, R. K., & Sheng, V. S., (2013, June). Does One-Against-All or One-Against-One Improve the Performance of Multiclass Classifications. In Proceedings of the 27th National Conference on Artificial Intelligence (AAAI) (pp. 1609-1610) (extended abstract and poster). July 14-18, Bellevue, Washington. AAAI</p>
        <p className="mb-3">Zhang, J., Wu, X., & Sheng, V. S., (2013, June). Imbalanced Multiple Noisy Labeling for Supervised Learning. In Proceedings of the 27th National Conference on Artificial Intelligence (AAAI) (pp. 1651-1652) (extended abstract and poster). July 14-18, Bellevue, Washington. AAAI</p>
        <p className="mb-3">Sheng, V. S., Provost, F. J., & Ipeirotis, P. G. (2008, August). Get Another Label? Improving Data Quality and Data Mining Using Multiple, Noisy Labelers. In Proceedings of the 14th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD) (pp. 614-622). August 24-27, Las Vegas, Nevada, USA.</p>
        <p className="mb-3">Sheng, V. S., & Ling, C. X. (2007). Partial Example Acquisition in Cost-Sensitive Learning. In Proceedings of the 13th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD) (pp. 638-646). August 12-15, San Jose, California, USA.</p>
        <p className="mb-3">Sheng V. S., & Ling, C. X. (2007, September). Roulette Sampling for Cost-Sensitive Learning. In Proceedings of the 18th European Conference on Machine Learning (ECML) (pp. 724-731). September 17-21, Warsaw, Polan</p>
        <p className="mb-3">Sheng, V. S., & Ling, C. X. (2006, June). Feature Value Acquisition in Testing: A Sequential Batch Test Algorithm. In Proceedings of the 23rd International Conference on Machine Learning (ICML) (pp. 809-816). June 25-29, Carnegie Mellon University, Pittsburgh, Pennsylvania.</p>
        <p className="mb-3">Ling, C. X., Sheng, V. S., Bruckhaus T., & Madhavji, N. H. (2006, August). Maximum Profit Mining and Its Application in Software Development. In Proceedings of the 12th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD) (pp. 929-934). August 20-23, Philadelphia, USA.</p>
        <p className="mb-3">Sheng, V. S., & Ling, C. X. (2006, July). Thresholding for Making Classifiers Cost-Sensitive. In Proceedings of the 21st National Conference on Artificial Intelligence (AAAI) (pp. 476-481). July 16–20, Boston, Massachusetts.</p>
        <p className="mb-3">Sheng, V. S., Ling, C. X., Ni, A., & Zhang, S. (2006, July). Cost-Sensitive Test Strategies. In Proceedings of the 21st National Conference on Artificial Intelligence (AAAI) (pp. 482-487). July 16–20, Boston, Massachusetts</p>
        <p className="mb-3">Sheng, S., Ling, C. X., & Yang, Q. (2005, October). Simple Test Strategies for Cost-Sensitive Decision Trees. In Proceedings of the 16th European Conference on Machine Learning (ECML) (pp. 365-376). October 3-7, Porto, Portugal</p>
        <p className="mb-3">Sheng, S., & Ling, C. X. (2005, October). Hybrid Cost-Sensitive Decision Trees. In Proceedings of the 9th European Conference on the Principles and Practice of Knowledge Discovery in Databases (PKDD) (pp. 274-284). October 3-7, Porto, Portugal.</p>
        <p className="mb-3">Ling, C. X., Sheng, S., Bruckhaus, T., & Madhavji, N. H. (2005, November). Predicting Software Escalations with Maximum ROI. In Proceedings of the Fifth IEEE International Conference on Data Mining (ICDM) (pp. 4-pp). IEEE Computer Society Press. November 27-30, Houston, Texas.</p>
        <p className="mb-6">Zhang, H., & Sheng, S. (2004, November). Learning Weighted Naive Bayes with Accurate Ranking. In Proceedings of the Fourth IEEE International Conference on Data Mining (ICDM) (pp. 567-570). IEEE Computer Society Press. November 01-04, Brighton, UK.</p>

      </section>

    </div>
  );
}